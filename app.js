var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var keys = require('./config/keys')

//mongodb CONNECT
var mongoose = require('mongoose');
mongoose.connect(keys.mongoURI);
mongoose.Promise = global.Promise;

var indexRouter = require('./routes/indexRoutes');
var pvsRouter = require('./routes/pvRoutes');
var invertersRouter = require('./routes/inverterRoutes')
var invertersRouter3 = require('./routes/inverterRoutes3')
var infosRouter = require('./routes/infoRoutes')
var infosRouter3 = require('./routes/infoRoutes3')
var loadsRouter = require('./routes/loadRoutes');
var printsRouter = require('./routes/printRoutes');
var printsRouter3 = require('./routes/printRoutes3');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/pvs', pvsRouter);
app.use('/inverters', invertersRouter);
app.use('/inverters3', invertersRouter3);
app.use('/infos', infosRouter);
app.use('/infos3', infosRouter3);
app.use('/loads', loadsRouter);
app.use('/prints', printsRouter);
app.use('/prints3', printsRouter3);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
