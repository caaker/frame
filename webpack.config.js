const css = {
  test: /\.css$/i,
  use: ['style-loader', 'css-loader']
};

const jsx = {
  test: /\.jsx?/,
  include: '/Users/c/top/frame/',
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-env', '@babel/preset-react']
    }
  }
};

const file_types = {
  rules: [
    css,
    jsx
  ]
};

const entry = '/Users/c/top/frame/index.jsx';

const output = {
  filename: 'bundle.js',
  path: '/Users/c/top/frame-server/dist'
};

const stats = { warnings: false };

const config_obj = {
  stats:          stats,
  entry:          entry,
  output:         output,
  module:         file_types
};

module.exports = (env) => {
  return config_obj;
};