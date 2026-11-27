import { parseDashboardFilterValuesFromSearchParams } from '@/page-layout/utils/parseDashboardFilterValuesFromSearchParams';
import { setDashboardFilterValueInSearchParams } from '@/page-layout/utils/setDashboardFilterValueInSearchParams';

// Re-serialized so a malformed link is never remembered
export const getValidDashboardFilterSearch = (
  searchParams: URLSearchParams,
): string =>
  Object.entries(parseDashboardFilterValuesFromSearchParams(searchParams))
    .reduce(
      (validSearchParams, [pageLayoutFilterId, value]) =>
        setDashboardFilterValueInSearchParams({
          searchParams: validSearchParams,
          pageLayoutFilterId,
          value,
        }),
      new URLSearchParams(),
    )
    .toString();
