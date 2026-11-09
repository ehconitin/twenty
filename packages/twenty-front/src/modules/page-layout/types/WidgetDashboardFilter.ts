import { type WidgetDashboardFilterIndicator } from '@/page-layout/types/WidgetDashboardFilterIndicator';
import { type RecordGqlOperationFilter } from 'twenty-shared/types';
import { type buildDashboardFilterForWidgetOrThrow } from 'twenty-shared/utils';

export type WidgetDashboardFilter = ReturnType<
  typeof buildDashboardFilterForWidgetOrThrow
> & {
  replacedWidgetRecordFilterIds: string[];
  isInvalid: boolean;
  gqlOperationFilter: RecordGqlOperationFilter;
  indicators: WidgetDashboardFilterIndicator[];
};
