import { msg } from '@lingui/core/macro';
import { isUndefined } from '@sniptt/guards';
import { type DashboardFilterBinding } from 'twenty-shared/types';
import { isDefined } from 'twenty-shared/utils';
import { z } from 'zod';

import { DASHBOARD_FILTER_BINDINGS_SCHEMA } from 'src/engine/metadata-modules/flat-page-layout-widget/validators/constants/dashboard-filter-bindings-schema.constant';
import { type FlatPageLayoutWidget } from 'src/engine/metadata-modules/flat-page-layout-widget/types/flat-page-layout-widget.type';
import { dropDashboardFilterBindingsToMissingFields } from 'src/engine/metadata-modules/flat-page-layout-widget/utils/drop-dashboard-filter-bindings-to-missing-fields.util';
import { isDashboardFilterBindingToMissingField } from 'src/engine/metadata-modules/flat-page-layout-widget/utils/is-dashboard-filter-binding-to-missing-field.util';
import { WidgetConfigurationType } from 'src/engine/metadata-modules/page-layout-widget/enums/widget-configuration-type.type';
import {
  PageLayoutWidgetException,
  PageLayoutWidgetExceptionCode,
} from 'src/engine/metadata-modules/page-layout-widget/exceptions/page-layout-widget.exception';
import { isChartReferencingFieldInConfiguration } from 'src/engine/metadata-modules/page-layout-widget/utils/is-chart-referencing-field-in-configuration.util';

type PageLayoutWidgetConfiguration = FlatPageLayoutWidget['configuration'];

const parseDashboardFilterBindingsOrThrow = (
  dashboardFilterBindings: unknown,
): DashboardFilterBinding[] | null | undefined => {
  const parsedDashboardFilterBindings =
    DASHBOARD_FILTER_BINDINGS_SCHEMA.safeParse(dashboardFilterBindings);

  if (!parsedDashboardFilterBindings.success) {
    throw new PageLayoutWidgetException(
      `Dashboard filter bindings are malformed: ${z.prettifyError(parsedDashboardFilterBindings.error)}`,
      PageLayoutWidgetExceptionCode.INVALID_PAGE_LAYOUT_WIDGET_DATA,
      { userFriendlyMessage: msg`Dashboard filter bindings are malformed` },
    );
  }

  return parsedDashboardFilterBindings.data;
};

export const getPageLayoutWidgetConfigurationToSaveOrThrow = ({
  existingWidget,
  configuration,
  objectMetadataId,
  fieldMetadataUniversalIdentifierById,
}: {
  existingWidget:
    | Pick<FlatPageLayoutWidget, 'configuration' | 'objectMetadataId'>
    | undefined;
  configuration: PageLayoutWidgetConfiguration;
  // undefined when the save leaves the widget's object unchanged
  objectMetadataId: string | null | undefined;
  fieldMetadataUniversalIdentifierById: Partial<Record<string, string>>;
}): PageLayoutWidgetConfiguration => {
  if (
    !isDefined(configuration) ||
    (!isChartReferencingFieldInConfiguration(configuration) &&
      configuration.configurationType !== WidgetConfigurationType.RECORD_TABLE)
  ) {
    return configuration;
  }

  const dashboardFilterBindings = parseDashboardFilterBindingsOrThrow(
    configuration.dashboardFilterBindings,
  );

  const dashboardFilterBindingToMissingField = dashboardFilterBindings?.find(
    (dashboardFilterBinding) =>
      isDashboardFilterBindingToMissingField({
        dashboardFilterBinding,
        fieldMetadataUniversalIdentifierById,
      }),
  );

  if (isDefined(dashboardFilterBindingToMissingField)) {
    throw new PageLayoutWidgetException(
      `Dashboard filter "${dashboardFilterBindingToMissingField.pageLayoutFilterId}" is bound to field "${dashboardFilterBindingToMissingField.fieldMetadataId}", which does not exist`,
      PageLayoutWidgetExceptionCode.INVALID_PAGE_LAYOUT_WIDGET_DATA,
      {
        userFriendlyMessage: msg`A dashboard filter is bound to a field that does not exist`,
      },
    );
  }

  if (!isDefined(existingWidget)) {
    return { ...configuration, dashboardFilterBindings };
  }

  const storedDashboardFilterBindings =
    'dashboardFilterBindings' in existingWidget.configuration
      ? existingWidget.configuration.dashboardFilterBindings
      : undefined;
  const existingDashboardFilterBindings =
    dropDashboardFilterBindingsToMissingFields({
      dashboardFilterBindings: storedDashboardFilterBindings,
      fieldMetadataUniversalIdentifierById,
    });

  if (isUndefined(dashboardFilterBindings)) {
    const isObjectChanging =
      !isUndefined(objectMetadataId) &&
      objectMetadataId !== existingWidget.objectMetadataId;

    // Field overrides point at the previous object; exclusions still hold
    return {
      ...configuration,
      dashboardFilterBindings: isObjectChanging
        ? existingDashboardFilterBindings?.filter(
            ({ fieldMetadataId }) => !isDefined(fieldMetadataId),
          )
        : existingDashboardFilterBindings,
    };
  }

  return { ...configuration, dashboardFilterBindings };
};
