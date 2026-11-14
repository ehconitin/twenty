import { useContextStoreObjectMetadataItemOrThrow } from '@/context-store/hooks/useContextStoreObjectMetadataItemOrThrow';
import { flattenedFieldMetadataItemsSelector } from '@/object-metadata/states/flattenedFieldMetadataItemsSelector';
import { useAggregateRecords } from '@/object-record/hooks/useAggregateRecords';
import { useFilterValueDependencies } from '@/object-record/record-filter/hooks/useFilterValueDependencies';
import { anyFieldFilterValueComponentState } from '@/object-record/record-filter/states/anyFieldFilterValueComponentState';
import { useRecordIndexAdditionalFilter } from '@/object-record/record-index/hooks/useRecordIndexAdditionalFilter';
import { useRecordIndexQueryRecordFilters } from '@/object-record/record-index/hooks/useRecordIndexQueryRecordFilters';
import { AggregateOperations } from '@/object-record/record-table/constants/AggregateOperations';
import { useAtomComponentStateValue } from '@/ui/utilities/state/jotai/hooks/useAtomComponentStateValue';
import { useAtomStateValue } from '@/ui/utilities/state/jotai/hooks/useAtomStateValue';
import { useGetRecordGroupVisibilityFilters } from '@/views/hooks/useGetRecordGroupVisibilityFilters';
import {
  combineFilters,
  computeRecordGqlOperationFilter,
  isDefined,
  turnAnyFieldFilterIntoRecordGqlFilter,
} from 'twenty-shared/utils';

export const useGetRecordIndexTotalCount = () => {
  const { objectMetadataItem } = useContextStoreObjectMetadataItemOrThrow();

  const {
    recordFilters: currentRecordFilters,
    recordFilterGroups: currentRecordFilterGroups,
  } = useRecordIndexQueryRecordFilters();

  const { filterValueDependencies } = useFilterValueDependencies();

  const flattenedFieldMetadataItems = useAtomStateValue(
    flattenedFieldMetadataItemsSelector,
  );

  const { recordFilters: recordGroupsVisibilityFilter, recordGroupGqlFilter } =
    useGetRecordGroupVisibilityFilters();

  const computedFilter = computeRecordGqlOperationFilter({
    filterValueDependencies,
    recordFilters: [...currentRecordFilters, ...recordGroupsVisibilityFilter],
    recordFilterGroups: currentRecordFilterGroups,
    fieldMetadataItems: flattenedFieldMetadataItems,
  });

  const filter = isDefined(recordGroupGqlFilter)
    ? { and: [computedFilter, recordGroupGqlFilter] }
    : computedFilter;

  const anyFieldFilterValue = useAtomComponentStateValue(
    anyFieldFilterValueComponentState,
  );

  const { recordGqlOperationFilter: anyFieldFilter } =
    turnAnyFieldFilterIntoRecordGqlFilter({
      fields: objectMetadataItem.readableFields,
      filterValue: anyFieldFilterValue,
    });

  const additionalFilter = useRecordIndexAdditionalFilter();

  const { data, loading } = useAggregateRecords<{
    id: { COUNT: number };
  }>({
    objectNameSingular: objectMetadataItem.nameSingular,
    filter: combineFilters([
      { ...filter, ...anyFieldFilter },
      additionalFilter,
    ]),
    recordGqlFieldsAggregate: {
      id: [AggregateOperations.COUNT],
    },
  });

  const totalCount = data?.id?.COUNT;

  return {
    totalCount,
    loading,
  };
};
