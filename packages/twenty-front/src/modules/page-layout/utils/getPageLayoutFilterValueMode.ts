import { type PageLayoutFilterValueMode } from '@/page-layout/types/PageLayoutFilterValueMode';
import { getPageLayoutFilterDateRange } from '@/page-layout/utils/getPageLayoutFilterDateRange';
import { isPageLayoutFilterDateRangeReversed } from '@/page-layout/utils/isPageLayoutFilterDateRangeReversed';
import {
  getDashboardFilterConditionValueIssue,
  isDefined,
  isNonEmptyArray,
} from 'twenty-shared/utils';
import {
  type PageLayoutFilterValue,
  ViewFilterOperand,
} from '~/generated-metadata/graphql';

const DATE_RANGE_OPERANDS = [
  ViewFilterOperand.IS_AFTER,
  ViewFilterOperand.IS_BEFORE,
];

export const getPageLayoutFilterValueMode = (
  pageLayoutFilterValue: Pick<PageLayoutFilterValue, 'conditions'> | null,
): PageLayoutFilterValueMode => {
  const conditions = pageLayoutFilterValue?.conditions ?? [];
  const operands = conditions.map(({ operand }) => operand);

  if (!isNonEmptyArray(operands)) {
    return 'NONE';
  }

  if (operands.length === 1 && operands[0] === ViewFilterOperand.IS_RELATIVE) {
    return isDefined(getDashboardFilterConditionValueIssue(conditions[0]))
      ? 'OTHER'
      : 'RELATIVE';
  }

  const isDateRange =
    operands.every((operand) => DATE_RANGE_OPERANDS.includes(operand)) &&
    new Set(operands).size === operands.length;

  const isReversedRange = isPageLayoutFilterDateRangeReversed(
    getPageLayoutFilterDateRange(isDateRange ? pageLayoutFilterValue : null),
  );
  return isDateRange && !isReversedRange ? 'CUSTOM_RANGE' : 'OTHER';
};
