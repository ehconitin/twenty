import { FieldMetadataType } from 'twenty-shared/types';
import { type ObjectLiteral, type WhereExpressionBuilder } from 'typeorm';

import {
  GraphqlQueryRunnerException,
  GraphqlQueryRunnerExceptionCode,
} from 'src/engine/api/graphql/graphql-query-runner/errors/graphql-query-runner.exception';
import { GraphqlQueryFilterFieldParser } from 'src/engine/api/graphql/graphql-query-runner/graphql-query-parsers/graphql-query-filter/graphql-query-filter-field.parser';
import { getFlatFieldMetadataMock } from 'src/engine/metadata-modules/flat-field-metadata/__mocks__/get-flat-field-metadata.mock';
import { getFlatObjectMetadataMock } from 'src/engine/metadata-modules/flat-object-metadata/__mocks__/get-flat-object-metadata.mock';
import { type FlatEntityMaps } from 'src/engine/metadata-modules/flat-entity/types/flat-entity-maps.type';
import { type FlatFieldMetadata } from 'src/engine/metadata-modules/flat-field-metadata/types/flat-field-metadata.type';
import { type WorkspaceSelectQueryBuilder } from 'src/engine/twenty-orm/repository/workspace-select-query-builder';

const OBJECT_METADATA_ID = 'c2716cbc-92a7-4ea1-a3b6-5f6d2f8f2e01';

const buildFlatFieldMetadataMaps = (
  flatFieldMetadatas: FlatFieldMetadata[],
): FlatEntityMaps<FlatFieldMetadata> => ({
  byUniversalIdentifier: Object.fromEntries(
    flatFieldMetadatas.map((flatFieldMetadata) => [
      flatFieldMetadata.universalIdentifier,
      flatFieldMetadata,
    ]),
  ),
  universalIdentifierById: Object.fromEntries(
    flatFieldMetadatas.map((flatFieldMetadata) => [
      flatFieldMetadata.id,
      flatFieldMetadata.universalIdentifier,
    ]),
  ),
  universalIdentifiersByApplicationId: {},
});

const createQueryBuilderMock = () => ({
  where: jest.fn(),
  andWhere: jest.fn(),
});

describe('GraphqlQueryFilterFieldParser', () => {
  const employeesFieldMetadata = getFlatFieldMetadataMock({
    universalIdentifier: 'employees-universal-identifier',
    objectMetadataId: OBJECT_METADATA_ID,
    type: FieldMetadataType.NUMBER,
    name: 'employees',
    id: '5a1f0bf5-8f96-4f95-8b1e-58a7a1f5a002',
  });

  const endsAtFieldMetadata = getFlatFieldMetadataMock({
    universalIdentifier: 'ends-at-universal-identifier',
    objectMetadataId: OBJECT_METADATA_ID,
    type: FieldMetadataType.DATE_TIME,
    name: 'endsAt',
    id: '2e4c86f3-16c1-4c4f-9845-1c0f4b2f1003',
  });

  const annualRecurringRevenueFieldMetadata = getFlatFieldMetadataMock({
    universalIdentifier: 'annual-recurring-revenue-universal-identifier',
    objectMetadataId: OBJECT_METADATA_ID,
    type: FieldMetadataType.CURRENCY,
    name: 'annualRecurringRevenue',
    id: '9f3d5a71-3d38-4d7c-9464-2b4f1e7c1004',
  });

  const flatFieldMetadatas = [
    employeesFieldMetadata,
    endsAtFieldMetadata,
    annualRecurringRevenueFieldMetadata,
  ];

  const flatObjectMetadata = getFlatObjectMetadataMock({
    universalIdentifier: 'company-universal-identifier',
    id: OBJECT_METADATA_ID,
    nameSingular: 'company',
    fieldIds: flatFieldMetadatas.map(
      (flatFieldMetadata) => flatFieldMetadata.id,
    ),
  });

  const flatFieldMetadataMaps = buildFlatFieldMetadataMaps(flatFieldMetadatas);

  const outerQueryBuilder =
    {} as unknown as WorkspaceSelectQueryBuilder<ObjectLiteral>;

  let parser: GraphqlQueryFilterFieldParser;
  let queryBuilderMock: ReturnType<typeof createQueryBuilderMock>;

  beforeEach(() => {
    parser = new GraphqlQueryFilterFieldParser(
      flatObjectMetadata,
      flatFieldMetadataMaps,
    );
    queryBuilderMock = createQueryBuilderMock();
  });

  const parseFilter = (
    key: string,
    // oxlint-disable-next-line typescript/no-explicit-any
    filterValue: any,
    isFirst = true,
  ) => {
    parser.parse(
      queryBuilderMock as unknown as WhereExpressionBuilder,
      outerQueryBuilder,
      'company',
      key,
      filterValue,
      isFirst,
    );
  };

  describe('scalar field filters', () => {
    it('should apply a single operator', () => {
      parseFilter('employees', { gt: 1000 });

      expect(queryBuilderMock.where).toHaveBeenCalledTimes(1);
      expect(queryBuilderMock.andWhere).not.toHaveBeenCalled();

      const [sql, params] = queryBuilderMock.where.mock.calls[0];

      expect(sql).toContain('"company"."employees" >');
      expect(Object.values(params)).toEqual([1000]);
    });

    it('should apply all operators combined with AND when multiple operators are passed', () => {
      parseFilter('employees', { gt: 1000, lte: 5000 });

      expect(queryBuilderMock.where).toHaveBeenCalledTimes(1);
      expect(queryBuilderMock.andWhere).toHaveBeenCalledTimes(1);

      const [whereSql, whereParams] = queryBuilderMock.where.mock.calls[0];
      const [andWhereSql, andWhereParams] =
        queryBuilderMock.andWhere.mock.calls[0];

      expect(whereSql).toContain('"company"."employees" >');
      expect(Object.values(whereParams)).toEqual([1000]);
      expect(andWhereSql).toContain('"company"."employees" <=');
      expect(Object.values(andWhereParams)).toEqual([5000]);
    });

    it('should apply all operators on a DATE_TIME field range filter', () => {
      parseFilter('endsAt', {
        gt: '2024-01-01T00:00:00.000Z',
        lte: '2024-12-31T23:59:59.999Z',
      });

      expect(queryBuilderMock.where).toHaveBeenCalledTimes(1);
      expect(queryBuilderMock.andWhere).toHaveBeenCalledTimes(1);

      const [, whereParams] = queryBuilderMock.where.mock.calls[0];
      const [, andWhereParams] = queryBuilderMock.andWhere.mock.calls[0];

      expect(Object.values(whereParams)).toEqual(['2024-01-01T00:00:00.000Z']);
      expect(Object.values(andWhereParams)).toEqual([
        '2024-12-31T23:59:59.999Z',
      ]);
    });

    it('should only use andWhere when the field filter is not the first condition', () => {
      parseFilter('employees', { gt: 1000, lte: 5000 }, false);

      expect(queryBuilderMock.where).not.toHaveBeenCalled();
      expect(queryBuilderMock.andWhere).toHaveBeenCalledTimes(2);
    });

    it('should throw when the field filter contains no operator', () => {
      expect(() => parseFilter('employees', {})).toThrow(
        new GraphqlQueryRunnerException(
          'Filter for field employees must contain at least one operator',
          GraphqlQueryRunnerExceptionCode.INVALID_QUERY_INPUT,
          { userFriendlyMessage: expect.anything() },
        ),
      );
    });

    it('should throw when an array operator receives an empty array, even alongside other operators', () => {
      expect(() => parseFilter('employees', { gt: 1000, in: [] })).toThrow(
        GraphqlQueryRunnerException,
      );
    });
  });

  describe('composite field filters', () => {
    it('should apply all operators combined with AND on a composite sub-field', () => {
      parseFilter('annualRecurringRevenue', {
        amountMicros: { gte: 1_000_000, lte: 5_000_000 },
      });

      expect(queryBuilderMock.where).toHaveBeenCalledTimes(1);
      expect(queryBuilderMock.andWhere).toHaveBeenCalledTimes(1);

      const [whereSql, whereParams] = queryBuilderMock.where.mock.calls[0];
      const [andWhereSql, andWhereParams] =
        queryBuilderMock.andWhere.mock.calls[0];

      expect(whereSql).toContain(
        '"company"."annualRecurringRevenueAmountMicros" >=',
      );
      expect(Object.values(whereParams)).toEqual([1_000_000]);
      expect(andWhereSql).toContain(
        '"company"."annualRecurringRevenueAmountMicros" <=',
      );
      expect(Object.values(andWhereParams)).toEqual([5_000_000]);
    });

    it('should apply each sub-field condition exactly once', () => {
      parseFilter('annualRecurringRevenue', {
        amountMicros: { gte: 1_000_000 },
        currencyCode: { eq: 'USD' },
      });

      expect(queryBuilderMock.where).toHaveBeenCalledTimes(1);
      expect(queryBuilderMock.andWhere).toHaveBeenCalledTimes(1);

      const [whereSql] = queryBuilderMock.where.mock.calls[0];
      const [andWhereSql] = queryBuilderMock.andWhere.mock.calls[0];

      expect(whereSql).toContain(
        '"company"."annualRecurringRevenueAmountMicros" >=',
      );
      expect(andWhereSql).toContain(
        '"company"."annualRecurringRevenueCurrencyCode" =',
      );
    });

    it('should only use andWhere when the composite filter is not the first condition', () => {
      parseFilter(
        'annualRecurringRevenue',
        { amountMicros: { gte: 1_000_000, lte: 5_000_000 } },
        false,
      );

      expect(queryBuilderMock.where).not.toHaveBeenCalled();
      expect(queryBuilderMock.andWhere).toHaveBeenCalledTimes(2);
    });

    it('should throw when a composite sub-field filter contains no operator', () => {
      expect(() =>
        parseFilter('annualRecurringRevenue', { amountMicros: {} }),
      ).toThrow(
        new GraphqlQueryRunnerException(
          'Filter for field amountMicros must contain at least one operator',
          GraphqlQueryRunnerExceptionCode.INVALID_QUERY_INPUT,
          { userFriendlyMessage: expect.anything() },
        ),
      );
    });
  });
});
