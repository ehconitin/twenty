import { DASHBOARD_FILTER_QUERY_PARAM_KEY } from '@/page-layout/constants/DashboardFilterQueryParamKey';

export const isDashboardFilterSearchParamKey = (key: string): boolean =>
  key.startsWith(`${DASHBOARD_FILTER_QUERY_PARAM_KEY}[`);
