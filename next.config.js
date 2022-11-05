/* eslint-env node */
/* eslint-disable @typescript-eslint/no-var-requires */

const path = require("path");

module.exports = {
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      src: path.join(__dirname, "src/"),
    };
    return config;
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://kyopro-ratings.jp1.su8.run/:path*',
      }
    ]
  }
};
