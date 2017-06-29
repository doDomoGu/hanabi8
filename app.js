var express = require('express');
var app = express();
app.set('view engine', 'jade');
app.set('views', 'jade');

app.use('/user/:id', function(req, res, next) {
    console.log('Request URL:', req.originalUrl);
    next();
}, function (req, res, next) {
    console.log('Request Type:', req.method);
    next();
});

app.get('/user/:id', function (req, res, next) {
    res.render('index', { title: 'Hey', message: 'Hello there!'});
});

//var birds = require('./bird');
//app.use('/bird', birds);


var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});