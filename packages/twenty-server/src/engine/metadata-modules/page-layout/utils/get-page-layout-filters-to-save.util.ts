import { isUndefined } from '@sniptt/guards';
import { DASHBOARD_DATE_RANGE_FILTER } from 'twenty-shared/constants';
import { PageLayoutType } from 'twenty-shared/types';
import { fastDeepEqual } from 'twenty-shared/utils';

import { type FlatPageLayout } from 'src/engine/metadata-modules/flat-page-layout/types/flat-page-layout.type';
import { sanitizePageLayoutFilters } from 'src/engine/metadata-modules/flat-page-layout/utils/sanitize-page-layout-filters.util';
import { type UpdatePageLayoutWithTabsInput } from 'src/engine/metadata-modules/page-layout/dtos/inputs/update-page-layout-with-tabs.input';

export const getPageLayoutFiltersToSave = ({
  existingFilters,
  pageLayoutType,
  filtersInput,
}: {
  existingFilters: FlatPageLayout['filters'];
  pageLayoutType: PageLayoutType;
  filtersInput: UpdatePageLayoutWithTabsInput['filters'];
}): FlatPageLayout['filters'] => {
  if (isUndefined(filtersInput)) {
    return existingFilters;
  }

  const sanitizedFilters = sanitizePageLayoutFilters(filtersInput);

  // One representation for "no default": the database never holds the built-in filter without one
  const filters =
    pageLayoutType === PageLayoutType.DASHBOARD &&
    fastDeepEqual(sanitizedFilters, [DASHBOARD_DATE_RANGE_FILTER])
      ? null
      : sanitizedFilters;

  return fastDeepEqual(filters, sanitizePageLayoutFilters(existingFilters))
    ? existingFilters
    : filters;
};
