import { useApolloFactory } from '@/apollo/hooks/useApolloFactory';
import { REACT_APP_SERVER_BASE_URL } from '~/config';

import { ApolloWorkspaceClientContext } from '../contexts/ApolloWorkspaceClientContext';

export const ApolloWorkspaceClientProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const apolloWorkspaceClient = useApolloFactory({
    uri: `${REACT_APP_SERVER_BASE_URL}/graphql`,
    connectToDevTools: false,
  });

  return (
    <ApolloWorkspaceClientContext.Provider value={apolloWorkspaceClient}>
      {children}
    </ApolloWorkspaceClientContext.Provider>
  );
};
