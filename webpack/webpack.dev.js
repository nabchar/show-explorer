const webpackDevConfig = require('./webpack.config');

webpackDevConfig.mode = 'development';
webpackDevConfig.devServer = {
  port: 8888,
  open: true,
  historyApiFallback: true,
};

module.exports = webpackDevConfig;
