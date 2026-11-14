import { type DashboardFilterValue } from 'twenty-shared/types';
import { isNonEmptyArray } from 'twenty-shared/utils';
import { type BarChartDataInput } from '~/generated-metadata/graphql';

// The time zone is sent even unfiltered so buckets follow the viewer
export const buildDashboardFilterChartDataInput = ({
  values,
  viewerTimeZone,
}: {
  values: DashboardFilterValue[];
  viewerTimeZone: string;
}): Pick<BarChartDataInput, 'dashboardFilterValues' | 'viewerTimeZone'> => ({
  ...(isNonEmptyArray(values) ? { dashboardFilterValues: values } : {}),
  viewerTimeZone,
});
