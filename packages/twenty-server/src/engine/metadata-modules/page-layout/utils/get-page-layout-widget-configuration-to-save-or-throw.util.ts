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
import { isChartReferencingFieldInConfiguration } from 'src/engine/metadata-modules/page-layout-widget/utils/is-chart-referencing-field-in-configuration.util';
import {
  PageLayoutException,
  PageLayoutExceptionCode,
} from 'src/engine/metadata-modules/page-layout/exceptions/page-layout.exception';

type PageLayoutWidgetConfiguration = FlatPageLayoutWidget['configuration'];

const parseDashboardFilterBindingsOrThrow = (
  dashboardFilterBindings: unknown,
): DashboardFilterBinding[] | null | undefined => {
  const parsedDashboardFilterBindings =
    DASHBOARD_FILTER_BINDINGS_SCHEMA.safeParse(dashboardFilterBindings);

  if (!parsedDashboardFilterBindings.success) {
    throw new PageLayoutException(
      `Dashboard filter bindings are malformed: ${z.prettifyError(parsedDashboardFilterBindings.error)}`,
      PageLayoutExceptionCode.INVALID_PAGE_LAYOUT_DATA,
      { userFriendlyMessage: msg`Dashboard filter bindings are malformed` },
    );
  }

  return parsedDashboardFilterBindings.data;
};

export const getPageLayoutWidgetConfigurationToSaveOrThrow = ({
  existingWidget,
  configuration,
  fieldMetadataUniversalIdentifierById,
}: {
  existingWidget: Pick<FlatPageLayoutWidget, 'configuration'> | undefined;
  configuration: PageLayoutWidgetConfiguration;
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
    throw new PageLayoutException(
      `Dashboard filter "${dashboardFilterBindingToMissingField.pageLayoutFilterId}" is bound to field "${dashboardFilterBindingToMissingField.fieldMetadataId}", which does not exist`,
      PageLayoutExceptionCode.INVALID_PAGE_LAYOUT_DATA,
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
    return {
      ...configuration,
      dashboardFilterBindings: existingDashboardFilterBindings,
    };
  }

  return { ...configuration, dashboardFilterBindings };
};
