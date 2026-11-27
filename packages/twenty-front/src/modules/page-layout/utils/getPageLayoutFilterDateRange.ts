import { type PageLayoutFilterDateRange } from '@/page-layout/types/PageLayoutFilterDateRange';
import { Temporal } from 'temporal-polyfill';
import { isDefined } from 'twenty-shared/utils';
import {
  type PageLayoutFilterValue,
  ViewFilterOperand,
} from '~/generated-metadata/graphql';

export const getPageLayoutFilterDateRange = (
  pageLayoutFilterValue: Pick<PageLayoutFilterValue, 'conditions'> | null,
): PageLayoutFilterDateRange => {
  const conditions = pageLayoutFilterValue?.conditions ?? [];

  const startDate = conditions.find(
    ({ operand }) => operand === ViewFilterOperand.IS_AFTER,
  )?.value;

  const dayAfterEndDate = conditions.find(
    ({ operand }) => operand === ViewFilterOperand.IS_BEFORE,
  )?.value;

  return {
    startDate: startDate ?? null,
    endDate: isDefined(dayAfterEndDate)
      ? Temporal.PlainDate.from(dayAfterEndDate)
          .subtract({ days: 1 })
          .toString()
      : null,
  };
};
