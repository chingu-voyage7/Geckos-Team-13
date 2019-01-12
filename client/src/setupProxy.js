const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/login', { target: 'http://localhost:3001/' }));
  app.use(proxy('/callback', { target: 'http://localhost:3001/' }));
  app.use(proxy('/logout', { target: 'http://localhost:3001/' }));
  app.use(proxy('/auctions', { target: 'http://localhost:3001/' }));
  app.use(proxy('/myauctions', { target: 'http://localhost:3001/' }));
};