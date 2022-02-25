const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  plugins: [
    ['postcss-preset-env', { 
        stage: 2,
        features: {
          'focus-visible-pseudo-class': false,
          'prefers-color-scheme-query': false,
          'focus-within-pseudo-class': false
        },
        preserve: true
      }
    ],
    ['cssnano', isDev? false : {}]
  ],
};