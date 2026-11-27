import { type DashboardFilterSessionMemoryUpdate } from '@/page-layout/types/DashboardFilterSessionMemoryUpdate';
import { getAppliedDashboardFilterSearch } from '@/page-layout/utils/getAppliedDashboardFilterSearch';
import { getValidDashboardFilterSearch } from '@/page-layout/utils/getValidDashboardFilterSearch';
import { removeDashboardFilterValuesFromSearchParams } from '@/page-layout/utils/removeDashboardFilterValuesFromSearchParams';
import { isNonEmptyString } from '@sniptt/guards';

export const getDashboardFilterSessionMemoryUpdate = ({
  search,
  rememberedDashboardFilterSearch,
}: {
  search: string;
  rememberedDashboardFilterSearch: string;
}): DashboardFilterSessionMemoryUpdate => {
  const searchParams = new URLSearchParams(search);
  const appliedDashboardFilterSearch = getAppliedDashboardFilterSearch({
    searchParams,
    rememberedDashboardFilterSearch,
  });

  if (!isNonEmptyString(appliedDashboardFilterSearch)) {
    return { type: 'NONE' };
  }

  if (appliedDashboardFilterSearch !== rememberedDashboardFilterSearch) {
    return {
      type: 'REMEMBER',
      dashboardFilterSearch: appliedDashboardFilterSearch,
    };
  }

  if (
    getValidDashboardFilterSearch(searchParams) === appliedDashboardFilterSearch
  ) {
    return { type: 'NONE' };
  }

  return {
    type: 'RESTORE',
    search: new URLSearchParams([
      ...removeDashboardFilterValuesFromSearchParams(searchParams).entries(),
      ...new URLSearchParams(appliedDashboardFilterSearch).entries(),
    ]).toString(),
  };
};
