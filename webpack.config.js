var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  mode: 'development',
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '2048.bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({title: '2048 Canvas'})
  ]
};
