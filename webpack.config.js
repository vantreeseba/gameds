const path = require('path');
const packageJson = require('./package.json');

const name = packageJson.name.replace(' ', '').replace('-', '');

// Define the Webpack config.
const config = {
  performance: {
    hints: false,
  },
  entry: {
    index: [
      './index.js',
    ],
  },
  output: {
    library: [name],
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].js?[chunkhash]',
  },
};

module.exports = config;
