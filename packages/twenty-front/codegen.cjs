process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

module.exports = {
  schema:
    (process.env.REACT_APP_SERVER_BASE_URL ?? 'http://localhost:3000') +
    '/graphql',
  documents: [
    './src/modules/activities/**/*.ts',
    './src/modules/activities/**/*.tsx',
    './src/modules/attachments/graphql/**/*.ts',
    './src/modules/command-menu/graphql/**/*.ts',
    './src/modules/prefetch/graphql/**/*.ts',
    './src/modules/workflow/**/graphql/**/*.ts',
    './src/modules/workflow/**/*.tsx',
    '!./src/**/*.test.tsx',
    '!./src/**/*.stories.tsx',
    '!./src/**/__mocks__/*.ts',
  ],
  overwrite: true,
  generates: {
    './src/generated/graphql.tsx': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
      config: {
        skipTypename: false,
        withHooks: true,
        withHOC: false,
        withComponent: false,
        scalars: {
          DateTime: 'string',
        },
        namingConvention: { enumValues: 'keep' },
      },
    },
  },
};
