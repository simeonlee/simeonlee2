var express = require('express');
var app = express();
var http = require('http');
var port = process.env.NODE_ENV === 'development' ? 5000 : 4568;

require('./config/middleware.js')(app, express); // Middleware
// require('./config/routes.js')(app); // Routes

app.set('port', port);
var server = http.createServer(app);
server.listen(port, () => {
  console.log('Server now listening on port: ' + port);
});

module.exports = app;