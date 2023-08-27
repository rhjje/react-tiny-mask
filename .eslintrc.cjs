module.exports = {
  extends: 'react-app',
  plugins: ['eslint-plugin-import', 'prettier'],
  rules: {
    'no-console': [
      'warn',
      {
        allow: ['warn', 'error'],
      },
    ],
    'prettier/prettier': [
      'warn',
      {
        endOfLine: 'auto',
      },
    ],
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        pathGroups: [
          {
            pattern: 'react{,-*,-*/*}',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@pages/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@widgets/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@features/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@entities/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@shared/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@model',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '**/*.{scss,css,sass}',
            group: 'internal',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
      },
    ],
  },
};
