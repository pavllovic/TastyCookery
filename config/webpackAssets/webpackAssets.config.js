const imageAssets = {
  test: /\.(jpg|jpeg|png|svg|webp|ico)$/,
  type: 'asset/resource'
}

const svgAssets = {
    test: /\.svg$/,
    type: 'asset',
    use: 'svgo-loader'  
}

const fontAssets = {
  test: /\.(woff|woff2|ttf)$/,
  type: 'asset/resource'
}

const videoAssets = {
  test: /\.(mp4)$/,
  type: 'asset/resource'
}

const webpackAssetsConfig = [
  imageAssets,
  fontAssets,
  videoAssets,
  svgAssets
]

module.exports = webpackAssetsConfig;