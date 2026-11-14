import { CalendarStartDay } from 'twenty-shared/constants';
import { ObjectRecordGroupByDateGranularity } from 'twenty-shared/types';

import { computeGapFillingDateRange } from 'src/modules/dashboard/chart-data/utils/compute-gap-filling-date-range.util';

const computeRange = (
  overrides: Partial<Parameters<typeof computeGapFillingDateRange>[0]>,
) => {
  const range = computeGapFillingDateRange({
    primaryAxisDateRange: { start: '2026-01-15', end: '2026-03-10' },
    primaryAxisGroupBySubFieldName: null,
    primaryAxisDateGranularity: ObjectRecordGroupByDateGranularity.MONTH,
    timeZone: 'UTC',
    firstDayOfTheWeek: CalendarStartDay.MONDAY,
    isQueryResultCutByLimit: false,
    ...overrides,
  });

  return (
    range && {
      start: range.start?.toString() ?? null,
      end: range.end?.toString() ?? null,
    }
  );
};

describe('computeGapFillingDateRange', () => {
  it('should align both sides of the range to the buckets of the date axis', () => {
    expect(computeRange({})).toEqual({
      start: '2026-01-01',
      end: '2026-03-01',
    });
  });

  it("should align weeks to the widget's first day of the week", () => {
    expect(
      computeRange({
        primaryAxisDateGranularity: ObjectRecordGroupByDateGranularity.WEEK,
        firstDayOfTheWeek: CalendarStartDay.SUNDAY,
      }),
    ).toEqual({ start: '2026-01-11', end: '2026-03-08' });
  });

  it('should keep an open side open', () => {
    expect(
      computeRange({
        primaryAxisDateRange: { start: '2026-02-20', end: null },
        primaryAxisDateGranularity: ObjectRecordGroupByDateGranularity.DAY,
      }),
    ).toEqual({ start: '2026-02-20', end: null });
  });

  it.each([
    ['no date range', { primaryAxisDateRange: null }],
    ['a query result cut by its limit', { isQueryResultCutByLimit: true }],
    ['a sub-field date axis', { primaryAxisGroupBySubFieldName: 'closeDate' }],
    ['no granularity', { primaryAxisDateGranularity: undefined }],
    [
      'a granularity without gap filling',
      {
        primaryAxisDateGranularity:
          ObjectRecordGroupByDateGranularity.DAY_OF_THE_WEEK,
      },
    ],
  ])('should not extend the axis for %s', (_title, overrides) => {
    expect(computeRange(overrides)).toBeUndefined();
  });
});
