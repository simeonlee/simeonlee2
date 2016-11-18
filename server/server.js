var express = require('express');
var app = express();
// var passport = require('passport');
// var https = require('https');
// var http = require('http');
// var fs = require('fs');
var port = process.env.NODE_ENV === 'development' ? 5000 : 3000;

// require('./config/passport.js')(passport); // Authentication
require('./config/middleware.js')(app, express); // Middleware
// require('./config/routes.js')(app); // Routes

app.listen(port, () => {
  console.log('Listening on Port: ' + port);
});

module.exports = app;