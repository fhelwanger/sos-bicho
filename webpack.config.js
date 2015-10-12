var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: path.join(__dirname, 'client/src/index.js'),
  output: {
    path: path.join(__dirname, 'client/dist/js'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel' },
      { test: /\.css$/, loaders: ['style', 'css'] }
    ]
  }
};
