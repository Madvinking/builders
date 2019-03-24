const eslintrc = require('@builders/eslint-config');

// use same eslintrc config file only add ts extensions
module.exports = {
  ...eslintrc,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', ...eslintrc.plugins],
  extends: ['plugin:@typescript-eslint/recommended', ...eslintrc.extends],
  rules: {
    '@typescript-eslint/restrict-plus-operands': 'error',
  },
};
