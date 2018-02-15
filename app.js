var express = require("express");
// var Winston = require("winston");
var app = express();

app.set("view engine", "ejs");

// Winston config
var Winston = require("./logger/WinstonPlugin.js");
var errorLogger = Winston.loggers.get("errorLogger");
var queryLogger = Winston.loggers.get("queryLogger");
var userLogger = Winston.loggers.get("userLogger");

// routes
app.get("/", function(req, res) {
	res.render("home");
});

app.get("/error", function(req, res) {
	// Winston.error("Hello log, from error page!");
	errorLogger.error("Hello log, from error page");
	res.render("error");
});

app.get("/query", function(req, res) {
	// Winston.debug("Hello log, from query page!");
	queryLogger.debug("Hello log, from query page");
	res.render("query");
});

app.get("/user", function(req, res) {
	// Winston.info("Hello log, from user page!");
	userLogger.info("Hello log, from user page");
	res.render("user");
});

app.listen(3000, function() {
	console.log("Serving winston_test app on port 3000");
})