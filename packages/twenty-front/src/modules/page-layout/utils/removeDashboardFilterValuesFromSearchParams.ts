import { isDashboardFilterSearchParamKey } from '@/page-layout/utils/isDashboardFilterSearchParamKey';

export const removeDashboardFilterValuesFromSearchParams = (
  searchParams: URLSearchParams,
): URLSearchParams =>
  new URLSearchParams(
    [...searchParams.entries()].filter(
      ([key]) => !isDashboardFilterSearchParamKey(key),
    ),
  );
