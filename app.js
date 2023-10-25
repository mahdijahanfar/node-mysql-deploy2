var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");
var session = require("express-session")

var indexRouter = require('./routes/index');
var newsRouter = require('./routes/news');
var register = require('./routes/register');
var login = require('./routes/login');
var notif = require('./routes/notif');
var tarp = require('./routes/tarp');
var farm_state = require('./routes/farm_state');
var setting_form = require('./routes/setting_form');
var report_form = require('./routes/report_form');
var support = require('./routes/support');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'webslesson',
  resave: true,
  saveUninitialized: true
}));

app.use('/', indexRouter);
app.use('/news', newsRouter)
app.use('/login', login)
app.use('/register', register)
app.use('/tarp', tarp)
app.use('/notif', notif)
app.use('/farm_state', farm_state)
app.use('/setting_form', setting_form)
app.use('/report_form', report_form)
app.use('/support', support)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
