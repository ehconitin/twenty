import { ApolloClient, NormalizedCacheObject } from '@apollo/client';
import { createContext } from 'react';

export const ApolloWorkspaceClientContext = createContext<
  ApolloClient<NormalizedCacheObject> | undefined
>(undefined);
