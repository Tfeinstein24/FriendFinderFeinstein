// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 8888;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
  type: "application/vnd.api+json"
}));

// Set up variables
var customers = [{
  routeName: "customer",
  name: "",
  phoneNumber: "",
  email: "",
  UniqueID: ""
}];

// Basic route that sends the user to survey page
app.get("/survey", function(req, res) {
  // takes you to survey page
  res.sendFile(path.join(__dirname, "survey.html"));
});
// This route takes you to home page
app.get("/", function(req, res) {
  // points to home.html
  res.sendFile(path.join(__dirname, "home.html"));
});
// API routes
require("./routing/apiRoutes")(app);

//app.get("/api/friends", function(req, res) {
  // Used to display JSON of all possible friends
//res.sendFile(path.join(__dirname, "friends.js"));
//});
//app.post("/api/friends", function(req, res) {
  // Used to handle incoming survey results. Also used to handle compatibility logic
  //res.sendFile(path.join(__dirname, "tables.html"));
//});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
