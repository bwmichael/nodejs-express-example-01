var express = require('express');
var MainRouter = express.Router();



MainRouter.get('/', function (req, res) {

res.send('Welcome to the FIRST route !!!');

});








module.exports = MainRouter;
