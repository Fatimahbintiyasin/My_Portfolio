// File Name: app.js
// Student Name: Fatimah Binti Yasin
// Student ID:  301193282
// Date: Oct 24, 2022

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
let compress = require('compression');
let bodyParser = require('body-parser');
let methodOverride = require('method-override');
let passport = require('passport');

var indexRouter = require('../routes/index');
var usersRouter = require('../routes/users');
var businessRouter = require('../routes/businesscontacts');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// Sets up passport

app.use(passport.initialize());
// app.use(passport.session());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/business', businessRouter);

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
// res.render('error');
res.json(
    {
        success: false,
        message: err.message
    })
});

module.exports = app;