import { renderHook, waitFor } from '@testing-library/react';
import { type ReactNode } from 'react';

import { currentRecordFiltersComponentState } from '@/object-record/record-filter/states/currentRecordFiltersComponentState';
import { type RecordFilter } from '@/object-record/record-filter/types/RecordFilter';
import {
  RecordIndexContextProvider,
  type RecordIndexContextValue,
} from '@/object-record/record-index/contexts/RecordIndexContext';
import { generateAggregateQuery } from '@/object-record/utils/generateAggregateQuery';
import { useGetRecordIndexTotalCount } from '@/views/hooks/internal/useGetRecordIndexTotalCount';
import {
  type RecordGqlOperationFilter,
  ViewFilterOperand,
} from 'twenty-shared/types';
import { getJestMetadataAndApolloMocksWrapper } from '~/testing/jest/getJestMetadataAndApolloMocksWrapper';
import { getMockFieldMetadataItemOrThrow } from '~/testing/utils/getMockFieldMetadataItemOrThrow';
import { getMockObjectMetadataItemOrThrow } from '~/testing/utils/getMockObjectMetadataItemOrThrow';

const INSTANCE_ID = 'instanceId';
const TOTAL_COUNT = 7;

const companyObjectMetadataItem = getMockObjectMetadataItemOrThrow('company');

const nameFieldMetadataItem = getMockFieldMetadataItemOrThrow({
  objectMetadataItem: companyObjectMetadataItem,
  fieldName: 'name',
});

const ADDITIONAL_FILTER = { name: { eq: 'Acme' } };

const NAME_CONTAINS_ACME: RecordFilter = {
  id: 'name-contains-acme',
  fieldMetadataId: nameFieldMetadataItem.id,
  value: 'Acme',
  displayValue: 'Acme',
  type: 'TEXT',
  operand: ViewFilterOperand.CONTAINS,
  label: 'Name',
};

const renderTotalCount = ({
  expectedFilter,
  recordIndexContext,
}: {
  expectedFilter: RecordGqlOperationFilter;
  recordIndexContext?: Pick<
    RecordIndexContextValue,
    'additionalFilter' | 'excludedRecordFilterIds'
  >;
}) => {
  const JestMetadataAndApolloMocksWrapper =
    getJestMetadataAndApolloMocksWrapper({
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
          currentRecordFiltersComponentState.atomFamily({
            instanceId: INSTANCE_ID,
          }),
          [NAME_CONTAINS_ACME],
        );
      },
    });

  return renderHook(() => useGetRecordIndexTotalCount(), {
    wrapper: ({ children }: { children: ReactNode }) => (
      <JestMetadataAndApolloMocksWrapper>
        {recordIndexContext === undefined ? (
          children
        ) : (
          <RecordIndexContextProvider
            value={{
              indexIdentifierUrl: () => '',
              onIndexRecordsLoaded: () => {},
              objectNamePlural: companyObjectMetadataItem.namePlural,
              objectNameSingular: companyObjectMetadataItem.nameSingular,
              objectMetadataItem: companyObjectMetadataItem,
              objectPermissionsByObjectMetadataId: {},
              recordIndexId: INSTANCE_ID,
              viewBarInstanceId: INSTANCE_ID,
              recordFieldByFieldMetadataItemId: {},
              labelIdentifierFieldMetadataItem: undefined,
              fieldMetadataItemByFieldMetadataItemId: {},
              fieldDefinitionByFieldMetadataItemId: {},
              ...recordIndexContext,
            }}
          >
            {children}
          </RecordIndexContextProvider>
        )}
      </JestMetadataAndApolloMocksWrapper>
    ),
  });
};

describe('useGetRecordIndexTotalCount', () => {
  it('should count with the current record filters outside a record index', async () => {
    const { result } = renderTotalCount({
      expectedFilter: { name: { ilike: '%Acme%' } },
    });

    await waitFor(() => expect(result.current.totalCount).toBe(TOTAL_COUNT));
  });

  it('should AND the additional filter of the surrounding record index', async () => {
    const { result } = renderTotalCount({
      expectedFilter: {
        and: [{ name: { ilike: '%Acme%' } }, ADDITIONAL_FILTER],
      },
      recordIndexContext: { additionalFilter: ADDITIONAL_FILTER },
    });

    await waitFor(() => expect(result.current.totalCount).toBe(TOTAL_COUNT));
  });

  it('should leave the excluded filters of the record index out of the count', async () => {
    const { result } = renderTotalCount({
      expectedFilter: ADDITIONAL_FILTER,
      recordIndexContext: {
        additionalFilter: ADDITIONAL_FILTER,
        excludedRecordFilterIds: [NAME_CONTAINS_ACME.id],
      },
    });

    await waitFor(() => expect(result.current.totalCount).toBe(TOTAL_COUNT));
  });
});
