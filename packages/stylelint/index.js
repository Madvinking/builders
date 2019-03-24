module.exports = {
  extends: ['stylelint-config-recommended', 'stylelint-prettier/recommended'],
  rules: {
    'block-no-empty': null,
    'declaration-block-no-duplicate-properties': null,
    'font-family-no-missing-generic-family-keyword': null,
    'no-descending-specificity': null,
    'no-duplicate-selectors': null,
    'selector-pseudo-element-colon-notation': null,
    'selector-type-no-unknown': [true, { ignore: ['custom-elements', 'default-namespace'] }],
    'prettier/prettier': [true, { singleQuote: true }]
  }
};
