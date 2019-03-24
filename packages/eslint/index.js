const prettierRules = require('./.prettierrc.js');

module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      impliedStrict: true
    }
  },
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier',
    'prettier/react'
  ],
  plugins: ['babel', 'react', 'jest', 'import', 'jsx-a11y', 'monorepo', 'prettier', 'no-mixed-operators'],
  rules: {
    'prettier/prettier': ['error', prettierRules],
    curly: 0,
    'no-var': 2,
    'one-var': 0,
    'no-console': 1,
    'babel/semi': 0,
    'prefer-const': 2,
    'react/prop-types': 0,
    'operator-linebreak': 0,
    'no-mixed-operators': 0,
    'babel/no-invalid-this': 0,
    'jsx-a11y/label-has-for': 0,
    'class-methods-use-this': 0,
    'newline-per-chained-call': 0
  },
  env: {
    es6: true,
    node: true,
    jest: true,
    browser: true
  },
  settings: { react: { version: 'detect' } }
};
