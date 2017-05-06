var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var app = express();
var PORT = process.env.PORT || 8080;

//serve up public folder and all content as static files to server.
app.use(express.static('public'));

//use bodyParser, do not encode url
app.use(bodyParser.urlencoded({
  extended: false
}));

// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));

//require handlebars
var exphbs = require('express-handlebars');

//use handlebars engine as template engine, use 'main' as our base file
app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

//link to burger controller, set as default page"/"
var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});