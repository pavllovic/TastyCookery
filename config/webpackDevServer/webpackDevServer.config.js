const path = require('path');
const webpackDevServerConfig = {
  hot: true,
  // liveReload: true,
  open: true,
  port: 'auto',
  client: {
    logging: 'info',
    progress: true,
    overlay: {
      errors: true,
      // warnings: true,
    },
  },
}

module.exports = webpackDevServerConfig;