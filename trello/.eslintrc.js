module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  plugins: ['prettier'],
  extends: [
    'eslint:recommended',
    'airbnb',
    'plugin:prettier/recommended',
    'plugin:react/jsx-runtime',
  ],
  parserOptions: {
    ecmaVersion: 2021,
  },
  rules: {
    'import/no-unresolved': 'off',
    'react/prop-types': 0,
    'no-extra-semi': 'error',
    'react/jsx-props-no-spreading': 'off',
    'no-unused-vars': 'warn',
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.ts'] }],
    'react/self-closing-comp': [
      'error',
      {
        component: false,
        html: false,
      },
    ],
    'react/function-component-definition': [
      1,
      { namedComponents: ['arrow-function'] },
    ],
    'import/extensions': 'off',
  },
};
