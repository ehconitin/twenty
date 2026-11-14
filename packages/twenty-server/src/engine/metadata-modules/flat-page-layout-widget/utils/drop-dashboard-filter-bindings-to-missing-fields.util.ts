import { type DashboardFilterBinding } from 'twenty-shared/types';
import { isDefined } from 'twenty-shared/utils';

import { isDashboardFilterBindingToMissingField } from 'src/engine/metadata-modules/flat-page-layout-widget/utils/is-dashboard-filter-binding-to-missing-field.util';

export const dropDashboardFilterBindingsToMissingFields = ({
  dashboardFilterBindings,
  fieldMetadataUniversalIdentifierById,
}: {
  dashboardFilterBindings: DashboardFilterBinding[] | null | undefined;
  fieldMetadataUniversalIdentifierById: Partial<Record<string, string>>;
}): DashboardFilterBinding[] | null | undefined => {
  if (!isDefined(dashboardFilterBindings)) {
    return dashboardFilterBindings;
  }

  return dashboardFilterBindings.filter(
    (dashboardFilterBinding) =>
      !isDashboardFilterBindingToMissingField({
        dashboardFilterBinding,
        fieldMetadataUniversalIdentifierById,
      }),
  );
};
