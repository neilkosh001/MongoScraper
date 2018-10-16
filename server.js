// Dependeencies
var express = require('express');
var expshdbs = require('express-handlebars');
var bodyParser = require('body-parser');

// Set up port to be either the hosts designated port or 8080
var PORT = process.env.PORT || 8080;

// Initializes the Express App
var app = express();

// Set up Express Router
var router = express.Router();

// Designate the public folder as a static directory
app.use(express.static(__dirname + '/public'));

// Connect Handlebars to the Express App
app.engine('handlebars', expshdbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');
// Use bodyParser in the app
app.use(bodyParser.urlencoded({
  extended: false
}));

// Have every request go through our router middleware
app.use(router);

// Listen on the port
app.listen(PORT, function() {
  console.log('Listening on port: ' + PORT);
});
