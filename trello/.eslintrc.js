module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['airbnb', 'prettier'],
  rules: {
    'import/no-unresolved': 'off',
    'react/prop-types': 0,
    'no-extra-semi': 'error',
    'react/jsx-props-no-spreading': 'off',
    'no-unused-vars': 'warn',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/self-closing-comp': [
      'error',
      {
        component: false,
        html: false,
      },
    ],
  },
};
