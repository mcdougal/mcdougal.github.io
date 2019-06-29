/* eslint-disable no-param-reassign */

module.exports = {
  distDir: `../build`,
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.css$/,
      use: `css-to-mui-loader`,
    });

    return config;
  },
};
