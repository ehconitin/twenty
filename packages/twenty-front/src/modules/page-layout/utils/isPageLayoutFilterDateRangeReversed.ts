import { type PageLayoutFilterDateRange } from '@/page-layout/types/PageLayoutFilterDateRange';
import { isNonEmptyString } from '@sniptt/guards';

export const isPageLayoutFilterDateRangeReversed = ({
  startDate,
  endDate,
}: PageLayoutFilterDateRange): boolean =>
  isNonEmptyString(startDate) &&
  isNonEmptyString(endDate) &&
  endDate < startDate;
