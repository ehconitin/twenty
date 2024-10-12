import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { IconChevronDown } from 'twenty-ui';

import { currentWorkspaceState } from '@/auth/states/currentWorkspaceState';
import { Workspaces } from '@/auth/states/workspaces';
import { Dropdown } from '@/ui/layout/dropdown/components/Dropdown';
import { DropdownMenuItemsContainer } from '@/ui/layout/dropdown/components/DropdownMenuItemsContainer';
import { useDropdown } from '@/ui/layout/dropdown/hooks/useDropdown';
import { MenuItemSelectAvatar } from '@/ui/navigation/menu-item/components/MenuItemSelectAvatar';
import { NavigationDrawerAnimatedCollapseWrapper } from '@/ui/navigation/navigation-drawer/components/NavigationDrawerAnimatedCollapseWrapper';
import { DEFAULT_WORKSPACE_LOGO } from '@/ui/navigation/navigation-drawer/constants/DefaultWorkspaceLogo';
import { MULTI_WORKSPACE_DROPDOWN_ID } from '@/ui/navigation/navigation-drawer/constants/MulitWorkspaceDropdownId';
import { useWorkspaceSwitching } from '@/ui/navigation/navigation-drawer/hooks/useWorkspaceSwitching';
import { NavigationDrawerHotKeyScope } from '@/ui/navigation/navigation-drawer/types/NavigationDrawerHotKeyScope';
import { isNavigationDrawerExpandedState } from '@/ui/navigation/states/isNavigationDrawerExpanded';
import { getImageAbsoluteURI } from '~/utils/image/getImageAbsoluteURI';

const StyledLogo = styled.div<{ logo: string }>`
  background: url(${({ logo }) => logo});
  background-position: center;
  background-size: cover;
  border-radius: ${({ theme }) => theme.border.radius.xs};
  height: 16px;
  width: 16px;
`;

const StyledContainer = styled.div<{ isNavigationDrawerExpanded: boolean }>`
  align-items: center;
  background: inherit;
  border: none;
  border-radius: ${({ theme }) => theme.border.radius.sm};
  color: ${({ theme }) => theme.font.color.secondary};
  cursor: pointer;
  display: flex;
  font-family: ${({ theme }) => theme.font.family};
  font-size: ${({ theme }) => theme.font.size.md};
  height: ${({ theme, isNavigationDrawerExpanded }) =>
    isNavigationDrawerExpanded ? theme.spacing(5) : theme.spacing(4)};
  padding: ${({ theme }) => theme.spacing(1)};
  text-decoration: none;
  width: ${({ isNavigationDrawerExpanded }) =>
    isNavigationDrawerExpanded ? '100%' : 'auto'};
  gap: ${({ theme, isNavigationDrawerExpanded }) =>
    isNavigationDrawerExpanded ? theme.spacing(2) : '0'};

  &:hover {
    background: ${({ theme }) => theme.background.transparent.light};
    color: ${({ theme }) => theme.font.color.primary};
  }
`;

const StyledLabel = styled.div`
  font-weight: ${({ theme }) => theme.font.weight.medium};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const StyledIconChevronDown = styled(IconChevronDown)<{ disabled?: boolean }>`
  color: ${({ disabled, theme }) =>
    disabled ? theme.font.color.extraLight : theme.font.color.tertiary};
  margin-left: auto;
  display: flex;
  align-items: center;
`;

type MultiWorkspaceDropdownButtonProps = {
  workspaces: Workspaces[];
};

export const MultiWorkspaceDropdownButton = ({
  workspaces,
}: MultiWorkspaceDropdownButtonProps) => {
  const theme = useTheme();
  const currentWorkspace = useRecoilValue(currentWorkspaceState);

  const [isMultiWorkspaceDropdownOpen, setToggleMultiWorkspaceDropdown] =
    useState(false);

  const { switchWorkspace } = useWorkspaceSwitching();

  const { closeDropdown } = useDropdown(MULTI_WORKSPACE_DROPDOWN_ID);

  const handleChange = async (workspaceId: string) => {
    setToggleMultiWorkspaceDropdown(!isMultiWorkspaceDropdownOpen);
    closeDropdown();
    await switchWorkspace(workspaceId);
  };
  const [isNavigationDrawerExpanded] = useRecoilState(
    isNavigationDrawerExpandedState,
  );

  return (
    <Dropdown
      dropdownId={MULTI_WORKSPACE_DROPDOWN_ID}
      dropdownHotkeyScope={{
        scope: NavigationDrawerHotKeyScope.MultiWorkspaceDropdownButton,
      }}
      clickableComponent={
        <StyledContainer
          data-testid="workspace-dropdown"
          isNavigationDrawerExpanded={isNavigationDrawerExpanded}
        >
          <StyledLogo
            logo={
              getImageAbsoluteURI(
                currentWorkspace?.logo === null
                  ? DEFAULT_WORKSPACE_LOGO
                  : currentWorkspace?.logo,
              ) ?? ''
            }
          />
          <NavigationDrawerAnimatedCollapseWrapper>
            <StyledLabel>{currentWorkspace?.displayName ?? ''}</StyledLabel>
          </NavigationDrawerAnimatedCollapseWrapper>
          <NavigationDrawerAnimatedCollapseWrapper>
            <StyledIconChevronDown
              size={theme.icon.size.md}
              stroke={theme.icon.stroke.sm}
            />
          </NavigationDrawerAnimatedCollapseWrapper>
        </StyledContainer>
      }
      dropdownComponents={
        <DropdownMenuItemsContainer>
          {workspaces.map((workspace) => (
            <MenuItemSelectAvatar
              key={workspace.id}
              text={workspace.displayName ?? ''}
              avatar={
                <StyledLogo
                  logo={
                    getImageAbsoluteURI(
                      workspace.logo === null
                        ? DEFAULT_WORKSPACE_LOGO
                        : workspace.logo,
                    ) ?? ''
                  }
                />
              }
              selected={currentWorkspace?.id === workspace.id}
              onClick={() => handleChange(workspace.id)}
            />
          ))}
        </DropdownMenuItemsContainer>
      }
    />
  );
};
