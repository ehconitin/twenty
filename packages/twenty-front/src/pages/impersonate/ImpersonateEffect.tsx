import { isNonEmptyString } from '@sniptt/guards';
import { useCallback, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilState, useSetRecoilState } from 'recoil';

import { useAuth } from '@/auth/hooks/useAuth';
import { useIsLogged } from '@/auth/hooks/useIsLogged';
import { currentUserState } from '@/auth/states/currentUserState';
import { tokenPairState } from '@/auth/states/tokenPairState';
import { AppPath } from '@/types/AppPath';
import { useImpersonateMutation } from '~/generated/graphql';
import { isDefined } from '~/utils/isDefined';
import { sleep } from '~/utils/sleep';

export const ImpersonateEffect = () => {
  const navigate = useNavigate();
  const { userId } = useParams();
  const { clearSession } = useAuth();

  const [currentUser, setCurrentUser] = useRecoilState(currentUserState);
  const setTokenPair = useSetRecoilState(tokenPairState);

  const [impersonate] = useImpersonateMutation();
  const isLogged = useIsLogged();

  const handleImpersonate = useCallback(async () => {
    if (!isNonEmptyString(userId)) {
      return;
    }

    try {
      await clearSession();

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

      setCurrentUser(user);
      setTokenPair(tokens);
      await sleep(0); // This hacky workaround is necessary to ensure the tokens stored in the cookie are updated correctly.
      window.location.href = AppPath.Index;
    } catch (error) {
      console.error('Impersonation failed:', error);
      navigate(AppPath.Index);
    }
  }, [
    userId,
    impersonate,
    setCurrentUser,
    setTokenPair,
    clearSession,
    navigate,
  ]);

  useEffect(() => {
    if (
      isLogged &&
      currentUser?.canImpersonate === true &&
      isNonEmptyString(userId)
    ) {
      handleImpersonate();
    } else {
      navigate(AppPath.Index);
    }
  }, [userId, currentUser, isLogged, handleImpersonate, navigate]);

  return <></>;
};
