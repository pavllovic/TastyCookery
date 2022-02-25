const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const IgnoreEmitPlugin = require('ignore-emit-webpack-plugin');
// const HtmlWebpackSkipAssetsPlugin = require('html-webpack-skip-assets-plugin').HtmlWebpackSkipAssetsPlugin;
const CompressionPlugin = require('compression-webpack-plugin');
const HtmlWebpackPlagin = require('html-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const isDev = process.env.NODE_ENV === 'development';

const miniCssExtractPlugin = new MiniCssExtractPlugin({
  filename: isDev? 'src/css/[name].css' : 'src/css/[contenthash].[name].css',
  chunkFilename: isDev? 'src/css/[id].css' : 'src/css/[contenthash].[id].css'
})

const compressionPlugin = new CompressionPlugin({
  test: [/\.js$/i, /\.css$/i]
});

// const ignoreEmitPlugin = new IgnoreEmitPlugin([
//   /(index)\.style\.js$/, /(index)\.js$/
// ]);

// const htmlWebpackSkipAssetsPlugin = new HtmlWebpackSkipAssetsPlugin({
//   excludeAssets: [
//     /(index)\.style\.js$/, /(index)\.js$/
//   ]
// });

const pages = [
  {name: 'index', title: 'TastyCookery', chunks: ['index']}
]

const htmlWebpackPlagin = pages.map((page) => {
  return new HtmlWebpackPlagin({
    title: page.title,
    filename: `${page.name}.html`,
    template: `./src/template/${page.name}.pug`,
    inject: 'body',
    chunks: page.chunks,
    minify: {
      collapseWhitespace: !isDev,
      collapseInlineTagWhitespace: !isDev,
      minifyCSS: !isDev,
      minifyJS: !isDev
    },
  })
})

const stylelintPlugin = new StylelintPlugin({
  configFile: path.resolve(__dirname, '../stylelint.config.js'),
  files: 'src/**/*.scss',
  fix: true
})

const eslintPlugin = new ESLintPlugin({
  files: 'src/**/*.js',
  overrideConfigFile: path.resolve(__dirname, '../.eslintrc.js'),
  lintDirtyModulesOnly: true
})

const cleanWebpackPlugin = new CleanWebpackPlugin();

let webpackPluginsConfig = [
  miniCssExtractPlugin,
  ...htmlWebpackPlagin,
  stylelintPlugin,
  eslintPlugin,
  cleanWebpackPlugin
]

if(!isDev) {
  webpackPluginsConfig = webpackPluginsConfig.concat([
    compressionPlugin
    // ignoreEmitPlugin,
    // htmlWebpackSkipAssetsPlugin
  ])
}

module.exports = webpackPluginsConfig;