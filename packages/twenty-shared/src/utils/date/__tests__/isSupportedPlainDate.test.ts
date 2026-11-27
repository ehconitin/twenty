import { isSupportedPlainDate } from '@/utils/date/isSupportedPlainDate';

describe('isSupportedPlainDate', () => {
  it.each(['2026-02-28', '0001-01-01', '0050-05-31', '9999-12-31'])(
    'should accept "%s"',
    (value) => {
      expect(isSupportedPlainDate(value)).toBe(true);
    },
  );

  it.each(['2026-02-30', '0000-01-01', '2026-2-3', '2026-02-28T00:00:00Z', ''])(
    'should reject "%s"',
    (value) => {
      expect(isSupportedPlainDate(value)).toBe(false);
    },
  );
});
