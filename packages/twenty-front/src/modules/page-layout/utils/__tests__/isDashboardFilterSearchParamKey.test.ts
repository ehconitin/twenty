import { isDashboardFilterSearchParamKey } from '@/page-layout/utils/isDashboardFilterSearchParamKey';

describe('isDashboardFilterSearchParamKey', () => {
  it('should match a dashboard filter key without operand', () => {
    expect(isDashboardFilterSearchParamKey('dashboardFilter[a]')).toBe(true);
  });

  it('should match a dashboard filter key with an operand', () => {
    expect(
      isDashboardFilterSearchParamKey('dashboardFilter[a][IS_RELATIVE]'),
    ).toBe(true);
  });

  it('should not match a key that only starts with the param name', () => {
    expect(isDashboardFilterSearchParamKey('dashboardFilterX')).toBe(false);
  });

  it('should not match other keys', () => {
    expect(isDashboardFilterSearchParamKey('viewId')).toBe(false);
  });
});
