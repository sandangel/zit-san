const {
  rewireWebpack: rewireTypescript,
  rewireJest: rewireTypescriptJest,
  rewireTSLint, // Optional, needed if using the TSLint integration.
} = require('react-app-rewire-typescript-babel-preset');
const path = require('path');

module.exports = {
  webpack: function(config, env) {
    config = rewireTypescript(config);

    // Optional, needed if using the TSLint integration.
    config = rewireTSLint(config /* {} - optional tslint-loader options */);

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
  jest: function(config) {
    return rewireTypescriptJest(config);
  },
};
