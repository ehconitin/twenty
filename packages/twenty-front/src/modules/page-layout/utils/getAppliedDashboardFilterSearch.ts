import { getValidDashboardFilterSearch } from '@/page-layout/utils/getValidDashboardFilterSearch';
import { isNonEmptyString } from '@sniptt/guards';

export const getAppliedDashboardFilterSearch = ({
  searchParams,
  rememberedDashboardFilterSearch,
}: {
  searchParams: URLSearchParams;
  rememberedDashboardFilterSearch: string;
}): string => {
  const urlDashboardFilterSearch = getValidDashboardFilterSearch(searchParams);

  return isNonEmptyString(urlDashboardFilterSearch)
    ? urlDashboardFilterSearch
    : rememberedDashboardFilterSearch;
};
