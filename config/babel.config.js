module.exports = {
  presets: [
    ['@babel/preset-env', 
      {
        useBuiltIns: 'usage',
        corejs: 3,
        modules : false,
        // bugfixes: true
      }
    ]
  ],
  // plugins: [
  //   ["@babel/plugin-transform-runtime", {corejs: 3}]
  // ]
}