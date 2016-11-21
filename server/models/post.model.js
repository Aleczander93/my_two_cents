var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new Schema({
  tite: {
    type: String,
    required: true
  },
  cover:{
    type: String
  },
  body: {
    type: String,
    required: true
  },
  author: {
    type: String, //this type will change to user object
    required: true
  },
  postDate: {
    type: Date,
    Required: true
  },
  summary: {
    type:String,
    required:true
  }
});

var Post = mongoose.model('Post', postSchema);
module.exports = Post;
