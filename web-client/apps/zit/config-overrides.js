const path = require('path');
// use local ts-loader instead of ts-loader in package dependency.
const rewireTypescript = require('./tools/rewireTypescript');

module.exports = {
  webpack: function(config, env) {
    config = rewireTypescript(config);

    // add tsconfig paths to webpack alias.
    const {
      compilerOptions: { paths, baseUrl },
    } = require(path.resolve(__dirname, './tsconfig.json'));
    const alias = Object.entries(paths).reduce((acc, [package, mapping]) => {
      package = package.replace('/*', '');
      const tsPath = mapping[0].replace('/*', '');
      if (acc[package]) return acc;

      acc[package] = `${path.resolve(baseUrl, tsPath)}`;
      return acc;
    }, {});
    config.resolve.alias = {
      ...config.resolve.alias,
      ...alias,
    };

    return config;
  },
  // jest: function(config) {
  //   return rewireTypescriptJest(config);
  // },
};
