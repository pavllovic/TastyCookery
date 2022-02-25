const path = require('path');

const webpackResolveConfig = {
  alias: {
    Components: path.resolve(__dirname, '../../src/components/'),
    Images: path.resolve(__dirname, '../../src/images/'),
    Lib: path.resolve(__dirname, '../../src/lib/'),
    Fonts: path.resolve(__dirname, '../../src/fonts/'),
    BD: path.resolve(__dirname, '../../src/data/'),
    Styles: path.resolve(__dirname, '../../src/styles')
  }
}

module.exports = webpackResolveConfig;