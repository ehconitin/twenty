import { t } from '@lingui/core/macro';

import { DASHBOARD_FILTER_DEFAULT_OPTION_VALUE } from '@/page-layout/constants/DashboardFilterDefaultOptionValue';
import { DASHBOARD_FILTER_IGNORED_OPTION_VALUE } from '@/page-layout/constants/DashboardFilterIgnoredOptionValue';
import { type DashboardFilterWidgetField } from '@/page-layout/types/DashboardFilterWidgetField';
import { type DashboardFilterWidgetSetting } from '@/page-layout/types/DashboardFilterWidgetSetting';
import {
  type DashboardFilterBinding,
  type PageLayoutFilter,
} from 'twenty-shared/types';
import {
  type getDashboardFilterCandidateFieldMetadataIds,
  isDefined,
  isFieldBindableToDashboardFilter,
  resolveDashboardFilterFieldForWidget,
} from 'twenty-shared/utils';

export const getDashboardFilterWidgetSetting = ({
  pageLayoutFilter,
  bindings,
  candidateFieldMetadataIds,
  fields,
}: {
  pageLayoutFilter: Pick<PageLayoutFilter, 'id' | 'type'>;
  bindings: DashboardFilterBinding[];
  candidateFieldMetadataIds: ReturnType<
    typeof getDashboardFilterCandidateFieldMetadataIds
  >;
  fields: DashboardFilterWidgetField[];
}): DashboardFilterWidgetSetting => {
  const resolveDashboardFilterField = (
    bindingsToResolve: DashboardFilterBinding[],
  ) =>
    resolveDashboardFilterFieldForWidget({
      pageLayoutFilterId: pageLayoutFilter.id,
      filterType: pageLayoutFilter.type,
      bindings: bindingsToResolve,
      ...candidateFieldMetadataIds,
      fields,
    });

  const binding = bindings.find(
    ({ pageLayoutFilterId }) => pageLayoutFilterId === pageLayoutFilter.id,
  );

  const resolution = resolveDashboardFilterField(bindings);
  const defaultResolution = isDefined(binding)
    ? resolveDashboardFilterField([])
    : resolution;

  const defaultField = fields.find(
    ({ id }) => id === defaultResolution.fieldMetadataId,
  );

  const defaultFieldLabel = defaultField?.label;
  const overrideFieldMetadataId = binding?.fieldMetadataId ?? null;

  // The resolver turns an override to a missing or unbindable field into UNRESOLVED
  const unavailableOverrideOptions =
    isDefined(overrideFieldMetadataId) && resolution.source === 'UNRESOLVED'
      ? [
          {
            value: overrideFieldMetadataId,
            label: t`Unavailable field`,
            iconName: 'IconFilterOff',
          },
        ]
      : [];

  const isFieldSelectable = (field: DashboardFilterWidgetField) => {
    // A deactivated override keeps applying, so it stays selectable
    if (
      field.id === overrideFieldMetadataId &&
      unavailableOverrideOptions.length === 0
    ) {
      return true;
    }

    if (!(field.isActive ?? false)) {
      return false;
    }

    return isFieldBindableToDashboardFilter({
      field,
      filterType: pageLayoutFilter.type,
    });
  };

  const fieldOptions = fields
    .filter(isFieldSelectable)
    .map(({ id, label, icon }) => ({ value: id, label, iconName: icon }));

  return {
    resolution,
    value:
      overrideFieldMetadataId ??
      (isDefined(binding)
        ? DASHBOARD_FILTER_IGNORED_OPTION_VALUE
        : DASHBOARD_FILTER_DEFAULT_OPTION_VALUE),
    options: [
      {
        value: DASHBOARD_FILTER_DEFAULT_OPTION_VALUE,
        label: isDefined(defaultFieldLabel)
          ? t`Default (${defaultFieldLabel})`
          : t`Default (no date field)`,
        iconName: defaultField?.icon ?? 'IconFilterOff',
      },
      ...unavailableOverrideOptions,
      ...fieldOptions,
      {
        value: DASHBOARD_FILTER_IGNORED_OPTION_VALUE,
        label: t`Ignored`,
        iconName: 'IconFilterOff',
      },
    ],
  };
};
