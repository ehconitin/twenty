import {
  IconBraces,
  IconBracketsContain,
  IconCalendarEvent,
  IconCalendarTime,
  IconComponent,
  IconId,
  IconNumber9,
  IconRelationOneToMany,
  IconSettings,
  IconTag,
  IconTags,
  IconToggleRight,
  IconTwentyStar,
  IconTypography,
} from 'twenty-ui';

import {
  FieldArrayValue,
  FieldBooleanValue,
  FieldDateTimeValue,
  FieldDateValue,
  FieldJsonValue,
  FieldMultiSelectValue,
  FieldNumberValue,
  FieldRatingValue,
  FieldRelationValue,
  FieldRichTextValue,
  FieldSelectValue,
  FieldTextValue,
  FieldUUidValue,
} from '@/object-record/record-field/types/FieldMetadata';
import { DEFAULT_DATE_VALUE } from '@/settings/data-model/constants/DefaultDateValue';
import { SettingsFieldTypeCategoryType } from '@/settings/data-model/types/SettingsFieldTypeCategoryType';
import { SettingsNonCompositeFieldType } from '@/settings/data-model/types/SettingsNonCompositeFieldType';

import { FieldMetadataType } from '~/generated-metadata/graphql';

DEFAULT_DATE_VALUE.setFullYear(DEFAULT_DATE_VALUE.getFullYear() + 2);

export type IconConfig = {
  Icon: IconComponent;
  rotate?: number;
  fill?: boolean;
};

export type SettingsFieldTypeConfig<T> = {
  label: string;
  iconConfig: IconConfig;
  exampleValue?: T;
  category: SettingsFieldTypeCategoryType;
};

type SettingsNonCompositeFieldTypeConfigArray = Record<
  SettingsNonCompositeFieldType,
  SettingsFieldTypeConfig<any>
>;

// TODO: can we derive this from backend definitions ?
export const SETTINGS_NON_COMPOSITE_FIELD_TYPE_CONFIGS: SettingsNonCompositeFieldTypeConfigArray =
  {
    [FieldMetadataType.Uuid]: {
      label: 'Unique ID',
      iconConfig: {
        Icon: IconId,
        rotate: 4,
      },
      exampleValue: '00000000-0000-0000-0000-000000000000',
      category: 'Advanced',
    } as const satisfies SettingsFieldTypeConfig<FieldUUidValue>,
    [FieldMetadataType.Text]: {
      label: 'Text',
      iconConfig: {
        Icon: IconTypography,
        rotate: 4,
        fill: false,
      },
      exampleValue:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum magna enim, dapibus non enim in, lacinia faucibus nunc. Sed interdum ante sed felis facilisis, eget ultricies neque molestie. Mauris auctor, justo eu volutpat cursus, libero erat tempus nulla, non sodales lorem lacus a est.',
      category: 'Basic',
    } as const satisfies SettingsFieldTypeConfig<FieldTextValue>,
    [FieldMetadataType.Numeric]: {
      label: 'Numeric',
      iconConfig: {
        Icon: IconNumber9,
        rotate: -4,
        fill: false,
      },
      exampleValue: 2000,
      category: 'Basic',
    } as const satisfies SettingsFieldTypeConfig<FieldNumberValue>,
    [FieldMetadataType.Number]: {
      label: 'Number',
      iconConfig: {
        Icon: IconNumber9,
        rotate: -4,
        fill: false,
      },
      exampleValue: 2000,
      category: 'Basic',
    } as const satisfies SettingsFieldTypeConfig<FieldNumberValue>,
    [FieldMetadataType.Boolean]: {
      label: 'True/False',
      iconConfig: {
        Icon: IconToggleRight,
        rotate: -4,
        fill: false,
      },
      exampleValue: true,
      category: 'Basic',
    } as const satisfies SettingsFieldTypeConfig<FieldBooleanValue>,
    [FieldMetadataType.DateTime]: {
      label: 'Date and Time',
      iconConfig: {
        Icon: IconCalendarTime,
        rotate: -4,
      },
      exampleValue: DEFAULT_DATE_VALUE.toISOString(),
      category: 'Basic',
    } as const satisfies SettingsFieldTypeConfig<FieldDateTimeValue>,
    [FieldMetadataType.Date]: {
      label: 'Date',
      iconConfig: {
        Icon: IconCalendarEvent,
        rotate: 4,
      },
      exampleValue: DEFAULT_DATE_VALUE.toISOString(),
      category: 'Basic',
    } as const satisfies SettingsFieldTypeConfig<FieldDateValue>,
    [FieldMetadataType.Select]: {
      label: 'Select',
      iconConfig: {
        Icon: IconTag,
        rotate: -4,
        fill: false,
      },
      category: 'Basic',
    } as const satisfies SettingsFieldTypeConfig<FieldSelectValue>,
    [FieldMetadataType.MultiSelect]: {
      label: 'Multi-select',
      iconConfig: {
        Icon: IconTags,
        rotate: -4,
      },
      category: 'Basic',
    } as const satisfies SettingsFieldTypeConfig<FieldMultiSelectValue>,
    [FieldMetadataType.Relation]: {
      label: 'Relation',
      iconConfig: {
        Icon: IconRelationOneToMany,
        rotate: -4,
      },
      category: 'Relation',
    } as const satisfies SettingsFieldTypeConfig<FieldRelationValue<any>>,
    [FieldMetadataType.Rating]: {
      label: 'Rating',
      iconConfig: {
        Icon: IconTwentyStar,
        rotate: -4,
      },
      exampleValue: 'RATING_3',
      category: 'Basic',
    } as const satisfies SettingsFieldTypeConfig<FieldRatingValue>,
    [FieldMetadataType.RawJson]: {
      label: 'JSON',
      iconConfig: {
        Icon: IconBraces,
        rotate: -4,
      },
      exampleValue: { key: 'value' },
      category: 'Basic',
    } as const satisfies SettingsFieldTypeConfig<FieldJsonValue>,
    [FieldMetadataType.RichText]: {
      label: 'Rich Text',
      iconConfig: {
        Icon: IconSettings,
        rotate: 4,
      },
      exampleValue: { key: 'value' },
      category: 'Basic',
    } as const satisfies SettingsFieldTypeConfig<FieldRichTextValue>,
    [FieldMetadataType.Array]: {
      label: 'Array',
      iconConfig: {
        Icon: IconBracketsContain,
        rotate: 4,
      },
      category: 'Basic',
      exampleValue: ['value1', 'value2'],
    } as const satisfies SettingsFieldTypeConfig<FieldArrayValue>,
  };
