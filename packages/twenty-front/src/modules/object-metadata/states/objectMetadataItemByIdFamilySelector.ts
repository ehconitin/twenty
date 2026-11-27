import { objectMetadataItemsByIdMapSelector } from '@/object-metadata/states/objectMetadataItemsByIdMapSelector';
import { type EnrichedObjectMetadataItem } from '@/object-metadata/types/EnrichedObjectMetadataItem';
import { createAtomFamilySelector } from '@/ui/utilities/state/jotai/utils/createAtomFamilySelector';

export const objectMetadataItemByIdFamilySelector = createAtomFamilySelector<
  EnrichedObjectMetadataItem | undefined,
  { objectMetadataItemId: string }
>({
  key: 'objectMetadataItemByIdFamilySelector',
  get:
    ({ objectMetadataItemId }) =>
    ({ get }) =>
      get(objectMetadataItemsByIdMapSelector).get(objectMetadataItemId),
  areEqual: (previous, next) => previous === next,
});
