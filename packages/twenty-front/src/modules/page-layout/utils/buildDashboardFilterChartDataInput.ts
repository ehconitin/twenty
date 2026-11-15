import { type DashboardFilters } from '@/page-layout/types/DashboardFilters';
import { type WidgetDashboardFilter } from '@/page-layout/types/WidgetDashboardFilter';
import { resolveDashboardFilterConditionsDateRange } from '@/page-layout/utils/resolveDashboardFilterConditionsDateRange';
import { composeChartFilterWithDashboardFilter } from '@/page-layout/widgets/graph/utils/composeChartFilterWithDashboardFilter';
import { type ChartFilters } from '@/side-panel/pages/page-layout/types/ChartFilters';
import { type Temporal } from 'temporal-polyfill';
import { type FieldMetadataType } from 'twenty-shared/types';
import { isDefined, isNonEmptyArray } from 'twenty-shared/utils';
import { type ChartDateRangeInput } from '~/generated-metadata/graphql';

// The time zone is sent even unfiltered so buckets follow the viewer
export const buildDashboardFilterChartDataInput = <
  TConfiguration extends { filter?: ChartFilters | null },
>({
  configuration,
  dashboardFilters: { values, timeZone, firstDayOfTheWeek },
  widgetDashboardFilter: { recordFilters, appliedFields },
  primaryAxisDateField,
  now,
}: {
  configuration: TConfiguration;
  dashboardFilters: Pick<
    DashboardFilters,
    'values' | 'timeZone' | 'firstDayOfTheWeek'
  >;
  widgetDashboardFilter: Pick<
    WidgetDashboardFilter,
    'recordFilters' | 'appliedFields'
  >;
  primaryAxisDateField?: { id: string; type: FieldMetadataType };
  now: Temporal.Instant;
}): {
  configuration: TConfiguration;
  viewerTimeZone: string;
  primaryAxisDateRange?: ChartDateRangeInput;
} => {
  const conditionsOnPrimaryAxis = values
    .filter(({ pageLayoutFilterId }) =>
      appliedFields.some(
        (appliedField) =>
          appliedField.pageLayoutFilterId === pageLayoutFilterId &&
          appliedField.fieldMetadataId === primaryAxisDateField?.id,
      ),
    )
    .flatMap(({ conditions }) => conditions);

  const primaryAxisDateRange =
    isDefined(primaryAxisDateField) && isNonEmptyArray(conditionsOnPrimaryAxis)
      ? resolveDashboardFilterConditionsDateRange({
          conditions: conditionsOnPrimaryAxis,
          fieldType: primaryAxisDateField.type,
          now: now.toZonedDateTimeISO(timeZone),
          firstDayOfTheWeek,
        })
      : undefined;

  return {
    configuration: isNonEmptyArray(recordFilters)
      ? {
          ...configuration,
          filter: composeChartFilterWithDashboardFilter({
            chartFilter: configuration.filter ?? {},
            dashboardRecordFilters: recordFilters,
          }),
        }
      : configuration,
    viewerTimeZone: timeZone,
    ...(isDefined(primaryAxisDateRange)
      ? {
          primaryAxisDateRange: {
            start: primaryAxisDateRange.start?.toString(),
            end: primaryAxisDateRange.end?.toString(),
          },
        }
      : {}),
  };
};
