const plugins = require('./plugins.default');
const browserPresets = require('./browser.presets'),
  babelEnv = [
    '@babel/env',
    {
      targets: ['>1%', 'last 4 versions', 'Firefox ESR', 'not ie < 9']
    }
  ],
  presets = [babelEnv, ...browserPresets];

module.exports = {
  presets,
  plugins
};
