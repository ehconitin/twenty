import { getValidDashboardFilterSearch } from '@/page-layout/utils/getValidDashboardFilterSearch';
import { DASHBOARD_DATE_RANGE_FILTER_ID } from 'twenty-shared/constants';

const KEY = `dashboardFilter[${DASHBOARD_DATE_RANGE_FILTER_ID}]`;

const getValidSearch = (entries: [string, string][]) =>
  getValidDashboardFilterSearch(new URLSearchParams(entries));

describe('getValidDashboardFilterSearch', () => {
  it('should keep a valid value and drop the other params', () => {
    expect(
      getValidSearch([
        ['tab', 'overview'],
        [`${KEY}[IS_RELATIVE]`, 'PAST_7_DAY'],
      ]),
    ).toBe(
      new URLSearchParams([[`${KEY}[IS_RELATIVE]`, 'PAST_7_DAY']]).toString(),
    );
  });

  it('should keep an explicit empty value', () => {
    expect(getValidSearch([[KEY, '']])).toBe(
      new URLSearchParams([[KEY, '']]).toString(),
    );
  });

  it('should drop a value the bar cannot apply', () => {
    expect(getValidSearch([[`${KEY}[IS_RELATIVE]`, 'garbage']])).toBe('');
  });
});
