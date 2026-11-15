// Postgres rejects year 0 and ISO dates with an expanded year
export const SUPPORTED_ISO_YEAR_PREFIX = /^(?!0000)\d{4}-/;
