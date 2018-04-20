var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var api = require('./routes/api');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(favicon('favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'dist')));

app.use('/', routes);
app.use('/api', api);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    switch (err.status) {
      case 404:
        res.render('error404.html', {
          title: 'Klanding',
          message: err.message,
          error: err
        });
        break;
      case 401:
        res.render('error401.html', {
          title: 'Klanding',
          message: err.message,
          error: err
        });
        break;
      case 403:
        res.render('error403.html', {
          title: 'Klanding',
          message: err.message,
          error: err
        });
        break;
      case 500:
        res.render('error500.html', {
          title: 'Klanding',
          message: err.message,
          error: err
        });
        break;
    }
  });
}

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  switch (err.status) {
    case 404:
      res.render('error404.html', {
        title: 'Klanding',
        message: err.message,
        error: {}
      });
      break;
    case 401:
      res.render('error401.html', {
        title: 'Klanding',
        message: err.message,
        error: {}
      });
      break;
    case 403:
      res.render('error403.html', {
        title: 'Klanding',
        message: err.message,
        error: {}
      });
      break;
    case 500:
      res.render('error500.html', {
        title: 'Klanding',
        message: err.message,
        error: {}
      });
      break;
  }
});

module.exports = app;
