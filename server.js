"use strict";

var express = require("express");
var bodyParser = require('body-parser');
var morgan = require("morgan");

var app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.text({type: 'text/xml'}));

app.get("/hello", function(req, res) {
	res.json({greeting: "hello"});
});

var server = app.listen(4000, function() {
	var port = server.address().port;
	console.log("Enrollments API Listening on port %s", port);
})

module.exports = server; // for testing