const path = require('path');

module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'standard-with-typescript',
    'plugin:i18next/recommended',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: [path.resolve(__dirname, 'tsconfig.json')],
  },
  plugins: ['react', 'i18next', 'react-hooks'],
  rules: {
    semi: ['error', 'always'],
    '@typescript-eslint/semi': ['error', 'always'],
    'react/react-in-jsx-scope': 'off',
    'comma-dangle': ['error', 'only-multiline'],
    '@typescript-eslint/comma-dangle': ['error', 'only-multiline'],
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/naming-convention': 'off',
    'react/display-name': 'off', //TODO: почитать и сделать норм для hoc
    '@typescript-eslint/prefer-includes': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    "space-before-function-paren": "off",
    "@typescript-eslint/space-before-function-paren": "warning",
    "@typescript-eslint/no-dynamic-delete": "off",
    '@typescript-eslint/no-confusing-void-expression': [
      'error',
      { ignoreArrowShorthand: true },
    ],
    '@typescript-eslint/no-floating-promises': [
      1,
      {
        ignoreVoid: true,
      },
    ],
    'i18next/no-literal-string': [
      'error',
      {
        markupOnly: true,
      },
    ],
    '@typescript-eslint/space-before-function-paren': ['error', 'never'],
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'semi',
          requireLast: true,
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false,
        },
        multilineDetection: 'brackets',
      },
    ],
    indent: ['warn', 2],
    '@typescript-eslint/indent': ['warn', 2],
  },
  overrides: [
    {
      files: ['**/src/**/*.{test,stories}.{ts, tsx}'],
      rules: {
        'i18next/no-literal-string': 'off',
      },
    },
  ],
};
