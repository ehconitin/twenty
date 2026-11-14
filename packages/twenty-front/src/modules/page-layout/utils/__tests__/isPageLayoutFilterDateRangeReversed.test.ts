import { isPageLayoutFilterDateRangeReversed } from '@/page-layout/utils/isPageLayoutFilterDateRangeReversed';

describe('isPageLayoutFilterDateRangeReversed', () => {
  it('should be true when the end date is before the start date', () => {
    expect(
      isPageLayoutFilterDateRangeReversed({
        startDate: '2026-03-31',
        endDate: '2026-03-01',
      }),
    ).toBe(true);
  });

  it('should be false for an ordered or single-day range', () => {
    expect(
      isPageLayoutFilterDateRangeReversed({
        startDate: '2026-03-01',
        endDate: '2026-03-31',
      }),
    ).toBe(false);
    expect(
      isPageLayoutFilterDateRangeReversed({
        startDate: '2026-03-01',
        endDate: '2026-03-01',
      }),
    ).toBe(false);
  });

  it('should be false when a bound is missing', () => {
    expect(
      isPageLayoutFilterDateRangeReversed({
        startDate: '2026-03-31',
        endDate: null,
      }),
    ).toBe(false);
    expect(
      isPageLayoutFilterDateRangeReversed({
        startDate: null,
        endDate: '2026-03-01',
      }),
    ).toBe(false);
    expect(
      isPageLayoutFilterDateRangeReversed({
        startDate: '2026-03-31',
        endDate: '',
      }),
    ).toBe(false);
  });
});
