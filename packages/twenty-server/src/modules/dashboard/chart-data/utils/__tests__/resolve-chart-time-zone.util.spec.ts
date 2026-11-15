import { resolveChartTimeZone } from 'src/modules/dashboard/chart-data/utils/resolve-chart-time-zone.util';

describe('resolveChartTimeZone', () => {
  it.each<[string, string | null | undefined, string]>([
    ['a zone the group-by supports', 'Asia/Tokyo', 'Asia/Tokyo'],
    ['the group-by name of a renamed zone', 'Europe/Kyiv', 'Europe/Kiev'],
    ['the canonical case of a zone', 'utc', 'UTC'],
    [
      'UTC for a zone the group-by does not know',
      'America/Ciudad_Juarez',
      'UTC',
    ],
    ['UTC for an unknown zone', 'Mars/Olympus_Mons', 'UTC'],
    ['UTC when no zone is sent', undefined, 'UTC'],
    ['UTC for a null zone', null, 'UTC'],
  ])('should resolve %s', (_title, timeZone, expectedTimeZone) => {
    expect(resolveChartTimeZone(timeZone)).toBe(expectedTimeZone);
  });
});
