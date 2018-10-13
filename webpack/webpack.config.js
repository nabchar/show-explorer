const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const parentDir = path.join(__dirname, '../client/');

module.exports = {
  entry: [
    path.join(parentDir, 'index.js'),
  ],
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(css|scss)$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpg|gif)$/,
        loaders: [
          'file-loader',
        ],
      },
    ],
  },
  output: {
    path: `${parentDir}/dist`,
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: parentDir,
    historyApiFallback: true,
    publicPath: '/',
  },
  resolve: {
    extensions: [
      '.js', '.jsx',
    ],
  },
  plugins: [
    new CleanWebpackPlugin([parentDir]),
    new HtmlWebpackPlugin({
      template: path.join(parentDir, 'index.html'),
    }),
  ],
};
