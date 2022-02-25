const path = require('path');
const webpackAssetsConfig = require('./webpackAssets/webpackAssets.config.js');
const webpackLoadersConfig = require('./webpackLoaders/webpackLoaders.config.js');
const webpackPluginsConfig = require('./webpackPlugins/webpackPlugins.config.js');
const webpackDevServerConfig = require('./webpackDevServer/webpackDevServer.config.js');
const webpackResolveConfig = require('./webpackResolve/webpackResolve.config.js');
const isDev = process.env.NODE_ENV === 'development';

const entry = {
  index: './src/index.js'
}

const devOutput = {
  path: path.resolve(__dirname, '../build'),
  chunkFilename: 'src/js/[name].js',
  filename: 'src/js/[name].js',
  assetModuleFilename: '[file]'
}

const prodOutput = {
  path: path.resolve(__dirname, '../dist'),
  clean: true,
  chunkFilename: 'src/js/[contenthash].[name].js',
  filename: 'src/js/[contenthash].[name].js',
  assetModuleFilename: '[path]/[contenthash].[name].[ext]'
}

module.exports = {
  mode: isDev? 'development' : 'production',
  entry: entry,
  output: isDev? devOutput : prodOutput,
  module: {
    rules: [
      ...webpackAssetsConfig,
      ...webpackLoadersConfig
    ]
  },
  plugins: [
    ...webpackPluginsConfig
  ],
  devServer: webpackDevServerConfig,
  resolve: webpackResolveConfig,
  devtool: isDev? 'source-map' : false,
  cache: isDev ? true : false,
}