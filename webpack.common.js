const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/app.js',
  },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     title: 'Production',
  //   }),
  // ],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public'),
    clean: true,
  },
};