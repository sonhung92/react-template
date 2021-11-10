const { createProxyMiddleware } = require('http-proxy-middleware');

// setup proxy for react app
// more details here: https://create-react-app.dev/docs/proxying-api-requests-in-development/
/* eslint-disable */
module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:8080',
      //   changeOrigin: true,
    }),
  );
};
