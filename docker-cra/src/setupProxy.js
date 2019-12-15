const proxy = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/api',
    proxy({
      target: 'http://host.docker.internal:5050',
      changeOrigin: true,
      pathRewrite: function (path, req) { return path.replace('/api', '') },
      logLevel: 'debug',
    })
  );
};