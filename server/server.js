var express = require('express');
var app = express();
// var passport = require('passport');
// var https = require('https');
var http = require('http');
// var fs = require('fs');
var port = process.env.NODE_ENV === 'development' ? 5000 : 3000;

// require('./config/passport.js')(passport); // Authentication
require('./config/middleware.js')(app, express); // Middleware
// require('./config/routes.js')(app); // Routes

if (process.env.NODE_ENV === 'production') {

  // var privateKey = fs.readFileSync('./https/www_yourjourney_io.key');
  // var certificate = fs.readFileSync('./https/www_yourjourney_io.crt');
  // var pemBundle = fs.readFileSync('./https/www_yourjourney_io_bundle.pem');

  // serverOptions = {
  //   ca: pemBundle,
  //   key: privateKey,
  //   cert: certificate
  // }

  // sequelize.sync().then(function() {
    // console.log('Synced with mySQL through Sequelize.');
    // https.createServer(serverOptions, app).listen(3000);
    http.createServer(app).listen(1337);
    // console.log('Listening on Port: 3000');
  // });

} else {
  app.listen(port, () => {
    console.log('Listening on Port: ' + port);
  });
}

module.exports = app;