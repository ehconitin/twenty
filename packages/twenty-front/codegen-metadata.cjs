process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

module.exports = {
  schema:
    (process.env.REACT_APP_SERVER_BASE_URL ?? 'http://localhost:3000') +
    '/metadata',
  documents: [
    './src/modules/**/*.ts',
    './src/modules/**/*.tsx',
    '!./src/modules/activities/**',
    '!./src/modules/attachments/**',
    '!./src/modules/command-menu/**',
    '!./src/modules/prefetch/**',
    '!./src/modules/workflow/**',
    '!./src/**/*.test.tsx',
    '!./src/**/*.stories.tsx',
    '!./src/**/__mocks__/*.ts',
    // Exclude workspace-specific operations that don't exist in metadata schema
    '!./src/modules/object-record/constants/EmptyQuery.ts',
    '!./src/modules/object-record/constants/EmptyMutation.ts',
    '!./src/modules/object-record/spreadsheet-import/**',
  ],
  overwrite: true,
  generates: {
    './src/generated-metadata/graphql.tsx': {
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
