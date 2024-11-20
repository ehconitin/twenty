import { useApolloClient } from '@apollo/client';
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

export const ImpersonateEffect = () => {
  const navigate = useNavigate();
  const { userId } = useParams();
  const { signOut } = useAuth();
  const client = useApolloClient();

  const [currentUser, setCurrentUser] = useRecoilState(currentUserState);
  const setTokenPair = useSetRecoilState(tokenPairState);

  const [impersonate] = useImpersonateMutation();
  const isLogged = useIsLogged();

  const handleImpersonate = useCallback(async () => {
    if (!isNonEmptyString(userId)) {
      return;
    }

    try {
      await signOut();

      await client.clearStore();

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
      window.location.reload();
    } catch (error) {
      console.error('Impersonation failed:', error);
      navigate(AppPath.Index);
    }
  }, [
    userId,
    impersonate,
    setCurrentUser,
    setTokenPair,
    signOut,
    client,
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

  return null;
};
