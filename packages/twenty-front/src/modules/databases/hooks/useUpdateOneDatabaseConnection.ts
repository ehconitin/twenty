import { useApolloClient, useMutation } from '@apollo/client';

import { UPDATE_ONE_DATABASE_CONNECTION } from '@/databases/graphql/mutations/updateOneDatabaseConnection';
import {
  UpdateRemoteServerInput,
  UpdateServerMutation,
  UpdateServerMutationVariables,
} from '~/generated-metadata/graphql';

export const useUpdateOneDatabaseConnection = () => {
  const apolloClient = useApolloClient();

  const [mutate] = useMutation<
    UpdateServerMutation,
    UpdateServerMutationVariables
  >(UPDATE_ONE_DATABASE_CONNECTION, {
    client: apolloClient,
  });

  const updateOneDatabaseConnection = async (
    input: UpdateRemoteServerInput,
  ) => {
    return await mutate({
      variables: {
        input,
      },
    });
  };

  return {
    updateOneDatabaseConnection,
  };
};
