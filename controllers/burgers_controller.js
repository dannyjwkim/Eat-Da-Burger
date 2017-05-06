//dependencies
var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var router = express.Router();
var burger = require('../models/burger.js')

//redirect to burger route by default
router.get('/', function(req, res) {
  res.redirect('/burgers');
});

//when directed to burgers route, get burger.js logic, call functions within it. 
router.get('/burgers', function(req, res) {
  burger.selectAll(function(data) {
    //when called (it's never called) render response through index.handlebars
    res.render('index', { burgers: data });
  });
});

//when route is burger/create run function
router.post('/burgers/create', function(req, res) {
  //call burger logic insertOne function(column,data,callback);
  burger.insertOne('burger_name', req.body.name, function() {
    //redirect to updated main page after insertOne
    res.redirect('/burgers');
  })
})

//update route
router.put('/burgers/update/devour/:id', function(req, res) {
  //tableName, column, ID, callback
  burger.updateOne('burgers','devoured', req.params.id, function() {
    //redirect to home upon response
    res.redirect('/burgers');
  })
})

//delete method available because method override
router.delete('/burgers/delete/:id', function(req, res) {
  //run burger.js logic of deleteOne(table,id,callback)
  burger.deleteOne('burgers',req.params.id, function() {
    //upon delete, redirect home
    res.redirect('/burgers');
  })
})

//initial load/direct
router.use(function(req, res) {
    res.redirect('/burgers');
})

module.exports = router;