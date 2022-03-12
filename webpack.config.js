// the path module allows paths to work on both nix and windows
const path = require('path');
const PATH_IN = path.join(__dirname, '.');
const PATH_OUT = path.join(__dirname, '..', '/frame-server/dist');

// style-loader and css-loader are both requried to handle .css files
const css = {
  test: /\.css$/i,
  use: ['style-loader', 'css-loader']
};

// babel-loader handles .js and .jsx files
const jsx = {
  include: PATH_IN,
  test: /\.jsx?/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-env', '@babel/preset-react']
    }
  }
};

// this webpack configuragtion file supports these two file types
const file_types = {
  rules: [
    css,
    jsx
  ]
};

// webpack starts building the dependency graph here
const input = `${ PATH_IN }/index.jsx`;

// webpack puts the output here
const output = {
  filename: 'bundle.js',
  path: PATH_OUT
};

// allows source maps
const devtool = 'source-map';

// turn warnings off in the console
const stats = { warnings: false };

// combine above ojects and export
const config_obj = {
  devtool:        devtool,
  stats:          stats,
  entry:          input,
  output:         output,
  module:         file_types
};

module.exports = (env) => {
  return config_obj;
};