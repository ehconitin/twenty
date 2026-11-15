import { useDashboardFilters } from '@/page-layout/hooks/useDashboardFilters';
import { useWidgetDashboardFilter } from '@/page-layout/hooks/useWidgetDashboardFilter';
import { buildDashboardFilterChartDataInput } from '@/page-layout/utils/buildDashboardFilterChartDataInput';
import { type ChartFilters } from '@/side-panel/pages/page-layout/types/ChartFilters';
import { useMemo } from 'react';
import { Temporal } from 'temporal-polyfill';
import { type FieldMetadataType } from 'twenty-shared/types';
import { isDefined } from 'twenty-shared/utils';

export const useDashboardFilterChartDataInput = <
  TConfiguration extends { filter?: ChartFilters | null },
>({
  configuration,
  primaryAxisDateField,
}: {
  configuration: TConfiguration;
  primaryAxisDateField?: { id: string; type: FieldMetadataType };
}) => {
  const dashboardFilters = useDashboardFilters();
  const { recordFilters, appliedFields } = useWidgetDashboardFilter();

  return useMemo(
    () =>
      isDefined(dashboardFilters)
        ? buildDashboardFilterChartDataInput({
            configuration,
            dashboardFilters,
            widgetDashboardFilter: { recordFilters, appliedFields },
            primaryAxisDateField,
            now: Temporal.Now.instant(),
          })
        : { configuration },
    [
      dashboardFilters,
      configuration,
      recordFilters,
      appliedFields,
      primaryAxisDateField,
    ],
  );
};
