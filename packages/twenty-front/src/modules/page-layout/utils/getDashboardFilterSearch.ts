import { isDashboardFilterSearchParamKey } from '@/page-layout/utils/isDashboardFilterSearchParamKey';

export const getDashboardFilterSearch = (
  searchParams: URLSearchParams,
): string =>
  new URLSearchParams(
    [...searchParams.entries()].filter(([key]) =>
      isDashboardFilterSearchParamKey(key),
    ),
  ).toString();
