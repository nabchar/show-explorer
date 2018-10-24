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
        test: /\.(png|jpg)$/,
        include: path.join(parentDir, 'images/'),
        options: {
          name: '[path][name].[ext]',
          publicPath: 'images/',
        },
        loader: 'file-loader',
      },
    ],
  },
  devtool: 'source-map',
  output: {
    path: `${parentDir}/dist`,
    filename: '[name].js',
    chunkFilename: '[name]-[id].js',
    publicPath: '/',
  },
  devServer: {
    contentBase: parentDir,
    historyApiFallback: true,
    publicPath: '/',
  },
  resolve: {
    alias: {
      public: path.join(parentDir, 'images/'),
    },
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
