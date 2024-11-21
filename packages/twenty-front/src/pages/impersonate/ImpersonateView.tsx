import styled from '@emotion/styled';
import { AnimatePresence, LayoutGroup } from 'framer-motion';
import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useRecoilState, useSetRecoilState } from 'recoil';

import { useAuth } from '@/auth/hooks/useAuth';
import { useIsLogged } from '@/auth/hooks/useIsLogged';
import { currentUserState } from '@/auth/states/currentUserState';
import { tokenPairState } from '@/auth/states/tokenPairState';
import { AppPath } from '@/types/AppPath';
import { useImpersonateMutation } from '~/generated/graphql';
import { isDefined } from '~/utils/isDefined';
import { sleep } from '~/utils/sleep';

import { TextInput } from '@/ui/input/components/TextInput';
import { Modal } from '@/ui/layout/modal/components/Modal';
import {
  Button,
  H1Title,
  Section,
  SectionAlignment,
  SectionFontColor,
} from 'twenty-ui';

const StyledImpersonateModal = styled(Modal)`
  border-radius: ${({ theme }) => theme.spacing(1)};
  width: calc(400px - ${({ theme }) => theme.spacing(32)});
  height: auto;
`;

const StyledCenteredButton = styled(Button)`
  box-sizing: border-box;
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing(2)};
`;

const StyledCenteredTitle = styled.div`
  text-align: center;
`;

const StyledSection = styled(Section)<{ error?: boolean }>`
  color: ${({ theme, error }) =>
    error ? theme.font.color.danger : 'currentColor'};
  margin-bottom: ${({ theme }) => theme.spacing(6)};
  margin-top: ${({ theme, error }) => (error ? theme.spacing(3) : 0)};
`;

const StyledConfirmButton = styled(StyledCenteredButton)`
  border-color: ${({ theme }) => theme.border.color.danger};
  box-shadow: none;
  color: ${({ theme }) => theme.color.red};
  font-size: ${({ theme }) => theme.font.size.md};
  line-height: ${({ theme }) => theme.text.lineHeight.lg};
  :hover {
    background-color: ${({ theme }) => theme.color.red10};
  }
`;

const StyledH1Title = styled(H1Title)<{ canImpersonate: boolean }>`
  color: ${({ theme, canImpersonate }) =>
    canImpersonate ? theme.font.color.primary : theme.font.color.danger};
`;

export const ImpersonateView = () => {
  const navigate = useNavigate();
  const { userId: userIdFromParams } = useParams();

  const { clearSession } = useAuth();
  const [currentUser, setCurrentUser] = useRecoilState(currentUserState);
  const setTokenPair = useSetRecoilState(tokenPairState);
  const [impersonate] = useImpersonateMutation();
  const isLogged = useIsLogged();

  const [userId, setUserId] = useState(userIdFromParams || '');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(true);

  if (!isLogged) {
    return <Link to={AppPath.Index} />;
  }

  const handleImpersonate = async () => {
    if (!userId.trim()) {
      setError('Please enter a user ID');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const impersonateResult = await impersonate({
        variables: { userId },
      });

      if (isDefined(impersonateResult.errors)) {
        throw impersonateResult.errors;
      }

      if (!impersonateResult.data?.impersonate) {
        throw new Error('No impersonate result');
      }

      const { user, tokens } = impersonateResult.data.impersonate;

      await clearSession();
      setCurrentUser(user);
      setTokenPair(tokens);
      await sleep(0); // This hacky workaround is necessary to ensure the tokens stored in the cookie are updated correctly.
      window.location.href = AppPath.Index;
    } catch (error) {
      console.error('Impersonation failed:', error);
      setError('Failed to impersonate user. Please try again.');
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    navigate(-1);
  };

  const handleEnter = () => {
    if (userId.trim().length > 0 && !isLoading) {
      handleImpersonate();
    }
  };

  return (
    <AnimatePresence mode="wait">
      <LayoutGroup>
        {isOpen && (
          <StyledImpersonateModal
            onClose={handleClose}
            onEnter={handleEnter}
            isClosable={true}
            padding="large"
            modalVariant="primary"
          >
            <StyledCenteredTitle>
              <StyledH1Title
                canImpersonate={
                  isDefined(currentUser?.canImpersonate) &&
                  currentUser?.canImpersonate
                }
                title={
                  currentUser?.canImpersonate
                    ? 'Impersonate User'
                    : 'Not Authorized'
                }
              />
            </StyledCenteredTitle>

            {currentUser?.canImpersonate ? (
              <>
                <StyledSection
                  alignment={SectionAlignment.Center}
                  fontColor={SectionFontColor.Primary}
                >
                  Enter the ID of the user you want to impersonate
                </StyledSection>

                <Section>
                  <TextInput
                    value={userId}
                    onChange={setUserId}
                    placeholder="User ID"
                    fullWidth
                    disableHotkeys
                    disabled={isLoading}
                    dataTestId="impersonate-modal-input"
                  />
                  {error && (
                    <StyledSection
                      alignment={SectionAlignment.Center}
                      error={true}
                    >
                      {error}
                    </StyledSection>
                  )}
                </Section>

                <StyledCenteredButton
                  onClick={handleClose}
                  variant="secondary"
                  title="Cancel"
                  fullWidth
                  disabled={isLoading}
                />

                <StyledConfirmButton
                  onClick={handleImpersonate}
                  variant="secondary"
                  accent="danger"
                  title={isLoading ? 'Impersonating...' : 'Impersonate'}
                  disabled={!userId.trim() || isLoading}
                  fullWidth
                  dataTestId="impersonate-modal-confirm-button"
                />
              </>
            ) : (
              <>
                <StyledSection
                  alignment={SectionAlignment.Center}
                  fontColor={SectionFontColor.Primary}
                >
                  You don't have permission to impersonate other users. Please
                  contact your administrator if you need this access.
                </StyledSection>

                <StyledCenteredButton
                  onClick={handleClose}
                  variant="secondary"
                  title="Go Back"
                  fullWidth
                />
              </>
            )}
          </StyledImpersonateModal>
        )}
      </LayoutGroup>
    </AnimatePresence>
  );
};
