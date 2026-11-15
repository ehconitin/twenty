import { objectMetadataItemByIdFamilySelector } from '@/object-metadata/states/objectMetadataItemByIdFamilySelector';
import { useFilterValueDependencies } from '@/object-record/record-filter/hooks/useFilterValueDependencies';
import { WidgetDashboardFilterContext } from '@/page-layout/contexts/WidgetDashboardFilterContext';
import { useCurrentPageLayoutOrThrow } from '@/page-layout/hooks/useCurrentPageLayoutOrThrow';
import { useIsPageLayoutInEditMode } from '@/page-layout/hooks/useIsPageLayoutInEditMode';
import { recordTableWidgetViewDraftByWidgetIdComponentFamilySelector } from '@/page-layout/states/selectors/recordTableWidgetViewDraftByWidgetIdComponentFamilySelector';
import { type DashboardFilters } from '@/page-layout/types/DashboardFilters';
import { type PageLayoutWidget } from '@/page-layout/types/PageLayoutWidget';
import { computeDashboardFilterForWidget } from '@/page-layout/utils/computeDashboardFilterForWidget';
import { getPageLayoutWidgetFilter } from '@/page-layout/utils/getPageLayoutWidgetFilter';
import { getWidgetConfigurationViewId } from '@/page-layout/utils/getWidgetConfigurationViewId';
import { useAtomComponentFamilySelectorValue } from '@/ui/utilities/state/jotai/hooks/useAtomComponentFamilySelectorValue';
import { useAtomFamilySelectorValue } from '@/ui/utilities/state/jotai/hooks/useAtomFamilySelectorValue';
import { useViewById } from '@/views/hooks/useViewById';
import { type ReactNode, useMemo } from 'react';

type WidgetDashboardFilterProviderProps = {
  widget: Pick<PageLayoutWidget, 'id' | 'objectMetadataId' | 'configuration'>;
  dashboardFilters: DashboardFilters;
  children: ReactNode;
};

export const WidgetDashboardFilterProvider = ({
  widget,
  dashboardFilters,
  children,
}: WidgetDashboardFilterProviderProps) => {
  const { currentPageLayout } = useCurrentPageLayoutOrThrow();
  const isPageLayoutInEditMode = useIsPageLayoutInEditMode();
  const objectMetadataItem = useAtomFamilySelectorValue(
    objectMetadataItemByIdFamilySelector,
    { objectMetadataItemId: widget.objectMetadataId ?? '' },
  );
  const { view } = useViewById(
    getWidgetConfigurationViewId(widget.configuration),
  );
  const recordTableWidgetViewDraft = useAtomComponentFamilySelectorValue(
    recordTableWidgetViewDraftByWidgetIdComponentFamilySelector,
    { widgetId: widget.id },
    currentPageLayout.id,
  );
  const { filterValueDependencies } = useFilterValueDependencies();

  const fields = objectMetadataItem?.fields;

  const widgetDashboardFilter = useMemo(
    () =>
      computeDashboardFilterForWidget({
        dashboardFilters,
        configuration: widget.configuration,
        fields: fields ?? [],
        widgetFilter: getPageLayoutWidgetFilter({
          configuration: widget.configuration,
          view,
          // Out of edit mode the table shows its saved view, so drafts are ignored
          recordTableWidgetViewDraft: isPageLayoutInEditMode
            ? recordTableWidgetViewDraft
            : undefined,
        }),
        filterValueDependencies,
      }),
    [
      dashboardFilters,
      widget,
      fields,
      view,
      isPageLayoutInEditMode,
      recordTableWidgetViewDraft,
      filterValueDependencies,
    ],
  );

  return (
    <WidgetDashboardFilterContext.Provider value={widgetDashboardFilter}>
      {children}
    </WidgetDashboardFilterContext.Provider>
  );
};
