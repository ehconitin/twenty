import { renderHook, waitFor } from '@testing-library/react';

import { currentRecordFilterGroupsComponentState } from '@/object-record/record-filter-group/states/currentRecordFilterGroupsComponentState';
import { type RecordFilterGroup } from '@/object-record/record-filter-group/types/RecordFilterGroup';
import { anyFieldFilterValueComponentState } from '@/object-record/record-filter/states/anyFieldFilterValueComponentState';
import { currentRecordFiltersComponentState } from '@/object-record/record-filter/states/currentRecordFiltersComponentState';
import { type RecordFilter } from '@/object-record/record-filter/types/RecordFilter';
import { generateAggregateQuery } from '@/object-record/utils/generateAggregateQuery';
import { useGetRecordIndexTotalCount } from '@/views/hooks/internal/useGetRecordIndexTotalCount';
import {
  RecordFilterGroupLogicalOperator,
  type RecordGqlOperationFilter,
  ViewFilterOperand,
} from 'twenty-shared/types';
import { turnAnyFieldFilterIntoRecordGqlFilter } from 'twenty-shared/utils';
import { getJestMetadataAndApolloMocksWrapper } from '~/testing/jest/getJestMetadataAndApolloMocksWrapper';
import { getMockFieldMetadataItemOrThrow } from '~/testing/utils/getMockFieldMetadataItemOrThrow';
import { getMockObjectMetadataItemOrThrow } from '~/testing/utils/getMockObjectMetadataItemOrThrow';

const INSTANCE_ID = 'instanceId';
const TOTAL_COUNT = 7;
const SEARCH = 'paris';

const companyObjectMetadataItem = getMockObjectMetadataItemOrThrow('company');

const nameFieldMetadataItem = getMockFieldMetadataItemOrThrow({
  objectMetadataItem: companyObjectMetadataItem,
  fieldName: 'name',
});

const OR_GROUP: RecordFilterGroup = {
  id: 'or-group',
  logicalOperator: RecordFilterGroupLogicalOperator.OR,
};

const nameContains = (value: string): RecordFilter => ({
  id: `name-contains-${value}`,
  fieldMetadataId: nameFieldMetadataItem.id,
  value,
  displayValue: value,
  type: 'TEXT',
  operand: ViewFilterOperand.CONTAINS,
  label: 'Name',
  recordFilterGroupId: OR_GROUP.id,
});

const NAME_CONTAINS_ACME_OR_GLOBEX: RecordGqlOperationFilter = {
  or: [{ name: { ilike: '%Acme%' } }, { name: { ilike: '%Globex%' } }],
};

const { recordGqlOperationFilter: SEARCH_FILTER } =
  turnAnyFieldFilterIntoRecordGqlFilter({
    fields: companyObjectMetadataItem.readableFields,
    filterValue: SEARCH,
  });

const renderTotalCount = ({
  expectedFilter,
  search,
}: {
  expectedFilter: RecordGqlOperationFilter;
  search: string;
}) =>
  renderHook(() => useGetRecordIndexTotalCount(), {
    wrapper: getJestMetadataAndApolloMocksWrapper({
      apolloMocks: [
        {
          request: {
            query: generateAggregateQuery({
              objectMetadataItem: companyObjectMetadataItem,
              recordGqlFields: { totalCount: true },
            }),
            variables: { filter: expectedFilter },
          },
          result: {
            data: {
              [companyObjectMetadataItem.namePlural]: {
                totalCount: TOTAL_COUNT,
              },
            },
          },
        },
      ],
      onInitializeJotaiStore: (store) => {
        store.set(
          currentRecordFilterGroupsComponentState.atomFamily({
            instanceId: INSTANCE_ID,
          }),
          [OR_GROUP],
        );
        store.set(
          currentRecordFiltersComponentState.atomFamily({
            instanceId: INSTANCE_ID,
          }),
          [nameContains('Acme'), nameContains('Globex')],
        );
        store.set(
          anyFieldFilterValueComponentState.atomFamily({
            instanceId: INSTANCE_ID,
          }),
          search,
        );
      },
    }),
  });

describe('useGetRecordIndexTotalCount', () => {
  it('should count with an OR filter group alone', async () => {
    const { result } = renderTotalCount({
      expectedFilter: NAME_CONTAINS_ACME_OR_GLOBEX,
      search: '',
    });

    await waitFor(() => expect(result.current.totalCount).toBe(TOTAL_COUNT));
  });

  it('should keep an OR filter group when a search is typed', async () => {
    const { result } = renderTotalCount({
      expectedFilter: { and: [NAME_CONTAINS_ACME_OR_GLOBEX, SEARCH_FILTER] },
      search: SEARCH,
    });

    await waitFor(() => expect(result.current.totalCount).toBe(TOTAL_COUNT));
  });
});
