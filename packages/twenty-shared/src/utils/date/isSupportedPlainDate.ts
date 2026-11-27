import { isDateWithoutTime } from '@/utils/date/isDateWithoutTime';
import { SUPPORTED_ISO_YEAR_PREFIX } from '@/utils/date/internal/SupportedIsoYearPrefix';
import { plainDateFilterValueSchema } from '@/utils/filter/utils/validation-schemas/filterValueScalarSchemas';

export const isSupportedPlainDate = (value: string): boolean =>
  isDateWithoutTime(value) &&
  SUPPORTED_ISO_YEAR_PREFIX.test(value) &&
  plainDateFilterValueSchema.safeParse(value).success;
