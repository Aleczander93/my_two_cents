var express= require('express');
var server = express();
var mongoose = require('mongoose');
var postRouter= require('./server/routers/post.router.js');

var port = process.env.PORT || 8080;
var mongoURI = process.env.mongoURI || require('./config.js').mongoURI;

mongoose.connect(mongoURI);

server.use(postRouter);

server.get('/', function(req, res){
  res.send('I am working!');
});

server.listen(port, function(){
  console.log('Now listneing on port...', port);
});
