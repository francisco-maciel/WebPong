var http = require('http');
var express = require('express');
var app = express();
var server = http.createServer(app);
var io = require('socket.io').listen(server);
var exec = require('child_process').exec;
var util = require('util');

app.set('view engine', 'ejs');
app.use(express.static('public'));
//app.use(express.json());
//app.use(express.urlencoded());

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

server.listen(1337, function() {
    console.log('Listening at port %s',1337)
});

io.on('connection', function(socket){
  console.log('a user connected');
});