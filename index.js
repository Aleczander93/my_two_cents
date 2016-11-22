var express= require('express');
var server = express();
var mongoose = require('mongoose');
var postRouter= require('./server/routers/post.router.js');
var bodyParser = require('body-parser');

var port = process.env.PORT || 8080;
var mongoURI = process.env.mongoURI || require('./config.js').mongoURI;

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));
server.use(express.static(__dirname + "/public"));

mongoose.connect(mongoURI);

server.use(postRouter);

server.get('/', function(req, res){
  res.sendFile('public/html/index.html', {root: __dirname});
});

server.listen(port, function(){
  console.log('Now listneing on port...', port);
});
