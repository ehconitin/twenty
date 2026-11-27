import { type FieldMetadataItem } from '@/object-metadata/types/FieldMetadataItem';
import { type DashboardFilters } from '@/page-layout/types/DashboardFilters';
import { type WidgetDashboardFilter } from '@/page-layout/types/WidgetDashboardFilter';
import { composeChartFilterWithDashboardFilter } from '@/page-layout/widgets/graph/utils/composeChartFilterWithDashboardFilter';
import { resolveDashboardFilterConditionsDateRange } from '@/page-layout/widgets/graph/utils/resolveDashboardFilterConditionsDateRange';
import { type ChartFilters } from '@/side-panel/pages/page-layout/types/ChartFilters';
import { type Temporal } from 'temporal-polyfill';
import { isDefined, isNonEmptyArray } from 'twenty-shared/utils';
import { type ChartDateRangeInput } from '~/generated-metadata/graphql';

// The time zone is sent even unfiltered so buckets follow the viewer
export const buildDashboardFilterChartDataInput = <
  TConfiguration extends { filter?: ChartFilters | null },
>({
  configuration,
  dashboardFilters: { values, timeZone, firstDayOfTheWeek },
  widgetDashboardFilter: { recordFilters, appliedFields },
  primaryAxisField,
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
  primaryAxisField?: Pick<FieldMetadataItem, 'id' | 'type'>;
  now: Temporal.Instant;
}): {
  configuration: TConfiguration;
  primaryAxisDateRange?: ChartDateRangeInput;
} => {
  const conditionsOnPrimaryAxis = values
    .filter(({ pageLayoutFilterId }) =>
      appliedFields.some(
        (appliedField) =>
          appliedField.pageLayoutFilterId === pageLayoutFilterId &&
          appliedField.fieldMetadataId === primaryAxisField?.id,
      ),
    )
    .flatMap(({ conditions }) => conditions);

  const primaryAxisDateRange =
    isDefined(primaryAxisField) && isNonEmptyArray(conditionsOnPrimaryAxis)
      ? resolveDashboardFilterConditionsDateRange({
          conditions: conditionsOnPrimaryAxis,
          fieldType: primaryAxisField.type,
          now: now.toZonedDateTimeISO(timeZone),
          firstDayOfTheWeek,
        })
      : undefined;

  return {
    configuration: {
      ...configuration,
      timezone: timeZone,
      ...(isNonEmptyArray(recordFilters)
        ? {
            filter: composeChartFilterWithDashboardFilter({
              chartFilter: configuration.filter ?? {},
              dashboardRecordFilters: recordFilters,
            }),
          }
        : {}),
    },
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
