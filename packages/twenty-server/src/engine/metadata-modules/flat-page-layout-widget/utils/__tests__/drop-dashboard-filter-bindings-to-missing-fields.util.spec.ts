import { dropDashboardFilterBindingsToMissingFields } from 'src/engine/metadata-modules/flat-page-layout-widget/utils/drop-dashboard-filter-bindings-to-missing-fields.util';

const EXISTING_FIELD_METADATA_ID = '20202020-0000-4000-8000-000000000001';
const MISSING_FIELD_METADATA_ID = '20202020-0000-4000-8000-000000000002';

const fieldMetadataUniversalIdentifierById = {
  [EXISTING_FIELD_METADATA_ID]: 'existing-field-universal-identifier',
};

const OVERRIDE_TO_EXISTING_FIELD = {
  pageLayoutFilterId: '20202020-0000-4000-8000-000000000011',
  fieldMetadataId: EXISTING_FIELD_METADATA_ID,
};
const OVERRIDE_TO_MISSING_FIELD = {
  pageLayoutFilterId: '20202020-0000-4000-8000-000000000012',
  fieldMetadataId: MISSING_FIELD_METADATA_ID,
};
const EXCLUSION = {
  pageLayoutFilterId: '20202020-0000-4000-8000-000000000013',
  fieldMetadataId: null,
};

describe('dropDashboardFilterBindingsToMissingFields', () => {
  it('should drop the overrides to missing fields and keep the others', () => {
    expect(
      dropDashboardFilterBindingsToMissingFields({
        dashboardFilterBindings: [
          OVERRIDE_TO_EXISTING_FIELD,
          OVERRIDE_TO_MISSING_FIELD,
          EXCLUSION,
        ],
        fieldMetadataUniversalIdentifierById,
      }),
    ).toEqual([OVERRIDE_TO_EXISTING_FIELD, EXCLUSION]);
  });

  it.each([undefined, null])('should pass %s bindings through', (bindings) => {
    expect(
      dropDashboardFilterBindingsToMissingFields({
        dashboardFilterBindings: bindings,
        fieldMetadataUniversalIdentifierById,
      }),
    ).toBe(bindings);
  });
});
