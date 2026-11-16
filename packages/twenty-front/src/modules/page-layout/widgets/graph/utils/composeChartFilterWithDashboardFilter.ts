import { type WidgetDashboardFilter } from '@/page-layout/types/WidgetDashboardFilter';
import { type ChartFilters } from '@/side-panel/pages/page-layout/types/ChartFilters';
import { RecordFilterGroupLogicalOperator } from 'twenty-shared/types';
import {
  findRootRecordFilterGroup,
  isDefined,
  isNonEmptyArray,
  replaceWidgetFilterPeriodsWithDashboardFilter,
} from 'twenty-shared/utils';

const DASHBOARD_ROOT_RECORD_FILTER_GROUP_ID = 'dashboard-filter-root';

export const composeChartFilterWithDashboardFilter = ({
  chartFilter,
  dashboardRecordFilters,
}: {
  chartFilter: ChartFilters;
  dashboardRecordFilters: WidgetDashboardFilter['recordFilters'];
}): ChartFilters => {
  if (!isNonEmptyArray(dashboardRecordFilters)) {
    return chartFilter;
  }

  const {
    filter: { recordFilters, recordFilterGroups },
  } = replaceWidgetFilterPeriodsWithDashboardFilter({
    filter: chartFilter,
    fieldMetadataIds: dashboardRecordFilters.map(
      ({ fieldMetadataId }) => fieldMetadataId,
    ),
  });

  const getGroupTreeIds = (recordFilterGroupId: string): string[] => [
    recordFilterGroupId,
    ...recordFilterGroups
      .filter(
        ({ parentRecordFilterGroupId }) =>
          parentRecordFilterGroupId === recordFilterGroupId,
      )
      .flatMap(({ id }) => getGroupTreeIds(id)),
  ];

  const rootRecordFilterGroup = findRootRecordFilterGroup(recordFilterGroups);

  const appliedRecordFilterGroupIds = new Set(
    isDefined(rootRecordFilterGroup)
      ? getGroupTreeIds(rootRecordFilterGroup.id)
      : [],
  );

  // One AND root, so dashboard conditions hold whatever the chart's own root operator is
  return {
    recordFilterGroups: [
      {
        id: DASHBOARD_ROOT_RECORD_FILTER_GROUP_ID,
        logicalOperator: RecordFilterGroupLogicalOperator.AND,
      },
      ...recordFilterGroups
        .filter(({ id }) => appliedRecordFilterGroupIds.has(id))
        .map((recordFilterGroup) => ({
          ...recordFilterGroup,
          parentRecordFilterGroupId:
            recordFilterGroup.parentRecordFilterGroupId ??
            DASHBOARD_ROOT_RECORD_FILTER_GROUP_ID,
        })),
    ],
    recordFilters: [
      ...recordFilters
        .filter(
          ({ recordFilterGroupId }) =>
            !isDefined(recordFilterGroupId) ||
            appliedRecordFilterGroupIds.has(recordFilterGroupId),
        )
        .map((recordFilter) => ({
          ...recordFilter,
          recordFilterGroupId:
            recordFilter.recordFilterGroupId ??
            DASHBOARD_ROOT_RECORD_FILTER_GROUP_ID,
        })),
      ...dashboardRecordFilters.map(({ fieldMetadataId, operand, value }) => ({
        fieldMetadataId,
        operand,
        value,
        recordFilterGroupId: DASHBOARD_ROOT_RECORD_FILTER_GROUP_ID,
      })),
    ],
  };
};
