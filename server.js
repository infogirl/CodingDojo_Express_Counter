// Load the express module
var express = require("express");

//Load and require session
var session = require('express-session');

// invoke var express and store the resulting application in var app
var app = express();

// This sets the location where express will look for the ejs views
app.set('views', __dirname + '/views');

// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine
app.set('view engine', 'ejs');
// string for encryption
app.use(session({secret: 'codingdojorock'}));


// lets handle the base route "/" and tell how to respond
app.get('/', function(request, response) {
//  response.send("<h1>Hello Express</h1>");
  if(request.session.count){
    request.session.count++;
  } else {
    request.session.count = 1;
  }
  response.render("index", {count: request.session.count});
});

app.post('/plus', function (request, response){
  request.session.count++;
  response.redirect('/');
});
// Tell the express app to listen on port 8000

app.listen(8000, function() {
  console.log("listening on port 8000");
})
