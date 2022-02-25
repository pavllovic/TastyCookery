const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const isDev = process.env.NODE_ENV === 'development';

const miniCssExtractPluginLoader = {
  loader: MiniCssExtractPlugin.loader,
}

const jsLoader = {
  test: /\.js$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      cacheDirectory: true,
      configFile: path.resolve(__dirname, '../babel.config.js')
    }
  }
}

const cssLoader = {
  loader: 'css-loader',
  options: {
    modules: false,
    importLoaders: 2,
    sourceMap: isDev? true : false
  }
}

const postcssLoader = {
  loader: 'postcss-loader',
  options: {
    postcssOptions: {
      config: path.resolve(__dirname, '../postcss.config.js')
    },
    sourceMap: isDev? true : false
  }
}

const sassLoader = {
  loader: 'sass-loader',
  options: {
    sourceMap: true,
    // sassOptions: {
    //   fiber: false,
    // },
  }
}

const stylesLoaders = {
  test: /\.(sa|sc|c)ss$/,
  use: [
    miniCssExtractPluginLoader,
    cssLoader,
    postcssLoader,
    sassLoader,
  ]
}

const pugLoader = {
  test: /\.pug$/,
  loader: 'pug3-loader',
  options: {
    pretty: isDev,
  }
}

const webpackLoadersConfig = [
  stylesLoaders,
  jsLoader,
  pugLoader,
]

module.exports = webpackLoadersConfig;