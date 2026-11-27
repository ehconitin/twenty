import { type FieldMetadataItem } from '@/object-metadata/types/FieldMetadataItem';
import { useDashboardFilters } from '@/page-layout/hooks/useDashboardFilters';
import { useWidgetDashboardFilter } from '@/page-layout/hooks/useWidgetDashboardFilter';
import { buildDashboardFilterChartDataInput } from '@/page-layout/widgets/graph/utils/buildDashboardFilterChartDataInput';
import { type ChartFilters } from '@/side-panel/pages/page-layout/types/ChartFilters';
import { useMemo } from 'react';
import { Temporal } from 'temporal-polyfill';
import { isDefined } from 'twenty-shared/utils';

export const useDashboardFilterChartDataInput = <
  TConfiguration extends { filter?: ChartFilters | null },
>({
  configuration,
  primaryAxisField,
}: {
  configuration: TConfiguration;
  primaryAxisField?: Pick<FieldMetadataItem, 'id' | 'type'>;
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
            primaryAxisField,
            now: Temporal.Now.instant(),
          })
        : { configuration },
    [
      dashboardFilters,
      configuration,
      recordFilters,
      appliedFields,
      primaryAxisField,
    ],
  );
};
