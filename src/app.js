var http = require('http');
var restify = require('restify');
var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

function respond(req, res, next) {
  res.send('hello ' + req.params.name);
  next();
}

app.get('/', function(req, res, next) {
	res.render('index', { title: 'The index page!' })
	next();
});


app.get('/mobile', function(req, res, next) {
	res.render('mobile', { data: 'data' })
	next();
});


app.get('/hello/:name', respond);
app.head('/hello/:name', respond);

var listener = app.listen(1337, function() {
  console.log('Listening at %s', JSON.stringify(listener.address().port));
});
