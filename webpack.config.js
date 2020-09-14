var path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/client.js',
  output: {
    path: path.resolve('lib'),
    filename: 'amcp-protocol.min.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        use: 'babel-loader'
      }
    ]
  }
} 
