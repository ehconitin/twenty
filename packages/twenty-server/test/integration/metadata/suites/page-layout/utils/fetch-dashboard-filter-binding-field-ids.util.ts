import { findManyObjectMetadata } from 'test/integration/metadata/suites/object-metadata/utils/find-many-object-metadata.util';
import { jestExpectToBeDefined } from 'test/utils/jest-expect-to-be-defined.util.test';

export type DashboardFilterBindingFieldIds = {
  companyObjectMetadataId: string;
  companyCreatedAtFieldId: string;
  companyUpdatedAtFieldId: string;
  companyDeletedAtFieldId: string;
  companyNameFieldId: string;
  companyPositionFieldId: string;
  personCreatedAtFieldId: string;
};

export const fetchDashboardFilterBindingFieldIds =
  async (): Promise<DashboardFilterBindingFieldIds> => {
    const { objects } = await findManyObjectMetadata({
      expectToFail: false,
      input: { filter: {}, paging: { first: 100 } },
      gqlFields: `
        id
        nameSingular
        fieldsList {
          id
          name
        }
      `,
    });

    const findObject = (nameSingular: string) => {
      const object = objects.find(
        (objectMetadata) => objectMetadata.nameSingular === nameSingular,
      );

      jestExpectToBeDefined(object);

      return object;
    };

    const findFieldId = ({
      objectNameSingular,
      fieldName,
    }: {
      objectNameSingular: string;
      fieldName: string;
    }) => {
      const field = findObject(objectNameSingular).fieldsList?.find(
        (fieldMetadata) => fieldMetadata.name === fieldName,
      );

      jestExpectToBeDefined(field);

      return field.id;
    };

    return {
      companyObjectMetadataId: findObject('company').id,
      companyCreatedAtFieldId: findFieldId({
        objectNameSingular: 'company',
        fieldName: 'createdAt',
      }),
      companyUpdatedAtFieldId: findFieldId({
        objectNameSingular: 'company',
        fieldName: 'updatedAt',
      }),
      companyDeletedAtFieldId: findFieldId({
        objectNameSingular: 'company',
        fieldName: 'deletedAt',
      }),
      companyNameFieldId: findFieldId({
        objectNameSingular: 'company',
        fieldName: 'name',
      }),
      companyPositionFieldId: findFieldId({
        objectNameSingular: 'company',
        fieldName: 'position',
      }),
      personCreatedAtFieldId: findFieldId({
        objectNameSingular: 'person',
        fieldName: 'createdAt',
      }),
    };
  };
