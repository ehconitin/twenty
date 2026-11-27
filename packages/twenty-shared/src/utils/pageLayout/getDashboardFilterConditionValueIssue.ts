import { DASHBOARD_FILTER_PLAIN_DATE_OPERANDS } from '@/constants/DashboardFilterPlainDateOperands';
import { type PageLayoutFilterCondition, ViewFilterOperand } from '@/types';
import { isSupportedPlainDate } from '@/utils/date/isSupportedPlainDate';
import { isSubDayRelativeDateFilterUnit } from '@/utils/filter/dates/utils/isSubDayRelativeDateFilterUnit';
import { relativeDateFilterStringifiedSchema } from '@/utils/filter/dates/utils/relativeDateFilterStringifiedSchema';

const MAX_RELATIVE_DATE_AMOUNT = 1000;

const getRelativeDateIssue = (value: string): string | undefined => {
  const relativeDateFilter =
    relativeDateFilterStringifiedSchema.safeParse(value);

  if (!relativeDateFilter.success) {
    return 'Expected a relative date such as "PAST_30_DAY".';
  }

  if ((relativeDateFilter.data.amount ?? 1) > MAX_RELATIVE_DATE_AMOUNT) {
    return `Expected a relative date amount of at most ${MAX_RELATIVE_DATE_AMOUNT}.`;
  }

  // A dashboard filter can bind a DATE field, where a sub-day range is empty
  if (isSubDayRelativeDateFilterUnit(relativeDateFilter.data.unit)) {
    return 'Expected a relative date unit of a day or longer.';
  }

  return undefined;
};

export const getDashboardFilterConditionValueIssue = ({
  operand,
  value,
}: PageLayoutFilterCondition): string | undefined => {
  if (operand === ViewFilterOperand.IS_RELATIVE) {
    return getRelativeDateIssue(value);
  }

  if (!DASHBOARD_FILTER_PLAIN_DATE_OPERANDS.includes(operand)) {
    return undefined;
  }

  return isSupportedPlainDate(value)
    ? undefined
    : 'Expected a YYYY-MM-DD date between years 0001 and 9999.';
};
