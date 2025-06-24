import { useContext } from 'react';
import { ApolloWorkspaceClientContext } from '../contexts/ApolloWorkspaceClientContext';

export const useApolloWorkspaceClient = () => {
  const client = useContext(ApolloWorkspaceClientContext);
  return client;
};
