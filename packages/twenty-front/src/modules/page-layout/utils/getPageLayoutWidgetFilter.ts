import { type DashboardFilterWidgetConfiguration } from '@/page-layout/types/DashboardFilterWidgetConfiguration';
import { type DashboardFilterWidgetFilter } from '@/page-layout/types/DashboardFilterWidgetFilter';
import { type RecordTableWidgetViewSnapshot } from '@/page-layout/widgets/record-table/types/RecordTableWidgetViewSnapshot';
import { getRecordTableWidgetFilter } from '@/page-layout/widgets/record-table/utils/getRecordTableWidgetFilter';
import { getRecordTableWidgetViewForDisplay } from '@/page-layout/widgets/record-table/utils/getRecordTableWidgetViewForDisplay';
import { type View } from '@/views/types/View';
import { isDefined } from 'twenty-shared/utils';

export const getPageLayoutWidgetFilter = ({
  configuration: { filter },
  view: savedView,
  recordTableWidgetViewDraft,
}: {
  configuration: DashboardFilterWidgetConfiguration;
  view: View | undefined;
  recordTableWidgetViewDraft: RecordTableWidgetViewSnapshot | undefined;
}): DashboardFilterWidgetFilter => {
  const view = getRecordTableWidgetViewForDisplay({
    draftSnapshot: recordTableWidgetViewDraft,
    view: savedView,
  });

  if (isDefined(view)) {
    return getRecordTableWidgetFilter(view);
  }

  return {
    recordFilters: filter?.recordFilters ?? [],
    recordFilterGroups: filter?.recordFilterGroups ?? [],
  };
};
