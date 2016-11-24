// Call in express for webserver handling
var express = require('express');

// Give our server a variable name > app
var app = express();
// Set the port we want to listen on
var port = process.env.PORT || 8080;


// Routers
// This creates a 'Router' and links it to a seperate file for easier management
var MainRouter = require('./src/routes/MainRoute');

var FirstRouter = require('./src/routes/FirstRoute');
var SecondRouter = require('./src/routes/SecondRoute');
var ThirdRouter = require('./src/routes/ThirdRoute');


// URL Mapping
// After creating the router, give that router a main URL map to user
app.use('/', MainRouter);

app.use('/first', FirstRouter);
app.use('/second', SecondRouter);
app.use('/third', ThirdRouter);


// This tells our server to startup and listen on our designated port
app.listen(port, function() {
  console.log('Server started! At http://localhost:' + port)
})
