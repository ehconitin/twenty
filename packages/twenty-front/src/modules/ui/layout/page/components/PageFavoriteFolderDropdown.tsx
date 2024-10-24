import { FavoriteFoldersMultiSelect } from '@/favorites/components/FavoriteFoldersMultiSelect';
import { FavoriteFoldersMultiSelectEffect } from '@/favorites/components/FavoriteFoldersSelectEffects';
import { FavoriteFoldersScope } from '@/favorites/scopes/FavoriteFoldersScope';
import { ObjectRecord } from '@/object-record/types/ObjectRecord';
import { Dropdown } from '@/ui/layout/dropdown/components/Dropdown';
import { useDropdown } from '@/ui/layout/dropdown/hooks/useDropdown';
import { DropdownScope } from '@/ui/layout/dropdown/scopes/DropdownScope';
import { PageFavoriteButton } from '@/ui/layout/page/components/PageFavoriteButton';

type FavoriteFoldersDropdownProps = {
  dropdownId: string;
  isFavorite: boolean;
  record?: ObjectRecord;
  objectNameSingular: string;
};

export const FavoriteFoldersDropdown = ({
  dropdownId,
  isFavorite,
  record,
  objectNameSingular,
}: FavoriteFoldersDropdownProps) => {
  const { closeDropdown } = useDropdown(dropdownId);

  return (
    <FavoriteFoldersScope favoriteFoldersScopeId={dropdownId}>
      <DropdownScope dropdownScopeId={dropdownId}>
        <Dropdown
          dropdownId={dropdownId}
          dropdownPlacement="bottom-start"
          clickableComponent={<PageFavoriteButton isFavorite={isFavorite} />}
          dropdownComponents={
            <>
              <FavoriteFoldersMultiSelectEffect />
              <FavoriteFoldersMultiSelect
                onSubmit={closeDropdown}
                record={record}
                objectNameSingular={objectNameSingular}
              />
            </>
          }
          dropdownHotkeyScope={{
            scope: dropdownId,
          }}
        />
      </DropdownScope>
    </FavoriteFoldersScope>
  );
};