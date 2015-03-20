require( './config/db' );
var sys = require("sys");
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
pushserver = require('node-pushserver');

var routes = require('./routes/index');
var api = require('./routes/api');

var app = express();
var http = require('http').Server(app);

http.listen(process.env.PORT || 8080, function() {
    console.log('listening on: ' + process.env.PORT);
});

/*Starten van NodeJS Pushserver (LATEN STAAN)*/
var spawn = require('child_process').spawn;
var prc = spawn('node',  ['./node_modules/node-pushserver/bin/pushserver.js','-c','./config/pushserver.json']);
/*Eind starten NodeJS Pushserver*/

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/api',api);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
//if (app.get('env') === 'development') {
//    app.use(function(err, req, res, next) {
//        res.status(err.status || 500);
//        res.render('error', {
//            message: err.message,
//            error: err
//        });
//    });
//}

// production error handler
// no stacktraces leaked to user
//app.use(function(err, req, res, next) {
//    res.status(err.status || 500);
//    res.render('error', {
//        message: err.message,
//        error: {}
//    });
//});


/*Code om Pushserver te stoppen als deze NodeJS instance wordt gestopt (LATEN STAAN)*/
prc.stdout.on('data', function(data) {
    console.log(data.toString());
});

prc.on('close', function (code) {
    sys.puts('process exit code ' + code);
    prc.kill('SIGTERM');
});

prc.on('exit', function(code) {
    sys.puts('About to exit with code:', code);
    prc.kill('SIGTERM');
});
/*  Eind stoppen pushserver */

module.exports = app;
