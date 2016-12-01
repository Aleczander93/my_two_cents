var user = require('.//server/models/user.model.js')
//mockup a request object with a body
var req = {};
req.body = {
  email: 'a@f.com',
  age:23,
  password:'password'
};

var user = new user(req.body);
console.log(user);
user.setPassword(req.body.password);
console.log(user);
var passwordIsValid = user.validPassword('password');
console.log(passwordIsValid);
console.log('JWT', user.generateJwt());
