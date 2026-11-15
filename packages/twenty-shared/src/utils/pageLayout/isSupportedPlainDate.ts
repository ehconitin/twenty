import { plainDateFilterValueSchema } from '@/utils/filter/utils/validation-schemas/filterValueScalarSchemas';
import { SUPPORTED_ISO_YEAR_PREFIX } from '@/utils/pageLayout/internal/SupportedIsoYearPrefix';

const PLAIN_DATE_FORMAT = /^\d{4}-\d{2}-\d{2}$/;

export const isSupportedPlainDate = (value: string): boolean =>
  PLAIN_DATE_FORMAT.test(value) &&
  SUPPORTED_ISO_YEAR_PREFIX.test(value) &&
  plainDateFilterValueSchema.safeParse(value).success;
