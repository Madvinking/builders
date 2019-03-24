const plugins = require('./plugins.default');
const browserPresets = require('./browser.presets'),
  babelEnv = [
    '@babel/env',
    {
      useBuiltIns: 'entry',
      targets: { browsers: 'last 1 chrome versions' }
    }
  ],
  presets = [babelEnv, ...browserPresets];

module.exports = {
  presets,
  plugins
};
