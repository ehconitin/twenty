import { getAppliedDashboardFilterSearch } from '@/page-layout/utils/getAppliedDashboardFilterSearch';
import { DASHBOARD_DATE_RANGE_FILTER_ID } from 'twenty-shared/constants';

const KEY = `dashboardFilter[${DASHBOARD_DATE_RANGE_FILTER_ID}][IS_RELATIVE]`;
const PAST_7_DAYS_SEARCH = new URLSearchParams([
  [KEY, 'PAST_7_DAY'],
]).toString();
const THIS_YEAR_SEARCH = new URLSearchParams([[KEY, 'THIS_1_YEAR']]).toString();

describe('getAppliedDashboardFilterSearch', () => {
  it('should apply the URL value over the remembered one', () => {
    expect(
      getAppliedDashboardFilterSearch({
        searchParams: new URLSearchParams(`tab=overview&${THIS_YEAR_SEARCH}`),
        rememberedDashboardFilterSearch: PAST_7_DAYS_SEARCH,
      }),
    ).toBe(THIS_YEAR_SEARCH);
  });

  it('should apply the remembered value when the URL has none', () => {
    expect(
      getAppliedDashboardFilterSearch({
        searchParams: new URLSearchParams('tab=overview'),
        rememberedDashboardFilterSearch: PAST_7_DAYS_SEARCH,
      }),
    ).toBe(PAST_7_DAYS_SEARCH);
  });

  it('should apply the remembered value over a malformed URL value', () => {
    expect(
      getAppliedDashboardFilterSearch({
        searchParams: new URLSearchParams([[KEY, 'garbage']]),
        rememberedDashboardFilterSearch: PAST_7_DAYS_SEARCH,
      }),
    ).toBe(PAST_7_DAYS_SEARCH);
  });

  it('should apply nothing without a URL value or a remembered value', () => {
    expect(
      getAppliedDashboardFilterSearch({
        searchParams: new URLSearchParams('tab=overview'),
        rememberedDashboardFilterSearch: '',
      }),
    ).toBe('');
  });
});
