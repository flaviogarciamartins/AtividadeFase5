var express          = require('express');
var consign          = require('consign');
var bodyParser       = require('body-parser');

var app = express();

//Use bodyparse for transformation data into json.
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


//setup auto load for app.
consign().include("./config/connection.js")
         .then("app/repositorys")
         .then("app/controllers")
         .then("app/services")
      //   .then("app/domains")
         .into(app);


//exports express
module.exports = app;
