import { Temporal } from 'temporal-polyfill';
import { type CalendarStartDay } from 'twenty-shared/constants';
import {
  FirstDayOfTheWeek,
  type ObjectRecordGroupByDateGranularity,
} from 'twenty-shared/types';
import {
  convertCalendarStartDayNonIsoNumberToFirstDayOfTheWeek,
  getPeriodStart,
  isDefined,
} from 'twenty-shared/utils';

import { DATE_TIME_PERIOD_BY_GAP_FILLED_DATE_GRANULARITY } from 'src/modules/dashboard/chart-data/constants/date-time-period-by-gap-filled-date-granularity.constant';
import { type ChartDateRangeInput } from 'src/modules/dashboard/chart-data/dtos/inputs/chart-date-range.input';
import { type DateRangeBounds } from 'src/modules/dashboard/chart-data/types/date-range-bounds.type';

export const computeGapFillingDateRange = ({
  primaryAxisDateRange,
  primaryAxisGroupBySubFieldName,
  primaryAxisDateGranularity,
  timeZone,
  firstDayOfTheWeek,
  isQueryResultCutByLimit,
}: {
  primaryAxisDateRange: ChartDateRangeInput | null | undefined;
  primaryAxisGroupBySubFieldName: string | null | undefined;
  primaryAxisDateGranularity:
    | ObjectRecordGroupByDateGranularity
    | null
    | undefined;
  timeZone: string;
  firstDayOfTheWeek: CalendarStartDay;
  isQueryResultCutByLimit: boolean;
}): DateRangeBounds | undefined => {
  const period = isDefined(primaryAxisDateGranularity)
    ? DATE_TIME_PERIOD_BY_GAP_FILLED_DATE_GRANULARITY[
        primaryAxisDateGranularity
      ]
    : undefined;

  // An extension must never draw zeros over data the query did not return
  if (
    isQueryResultCutByLimit ||
    !isDefined(primaryAxisDateRange) ||
    isDefined(primaryAxisGroupBySubFieldName) ||
    !isDefined(period)
  ) {
    return undefined;
  }

  const weekStart = convertCalendarStartDayNonIsoNumberToFirstDayOfTheWeek(
    firstDayOfTheWeek,
    FirstDayOfTheWeek.MONDAY,
  );

  const toBucketStart = (date: string | null | undefined) =>
    isDefined(date)
      ? getPeriodStart(
          Temporal.PlainDate.from(date).toZonedDateTime(timeZone),
          period,
          weekStart,
        ).toPlainDate()
      : null;

  return {
    start: toBucketStart(primaryAxisDateRange.start),
    end: toBucketStart(primaryAxisDateRange.end),
  };
};
