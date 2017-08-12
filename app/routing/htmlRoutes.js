// //Your `htmlRoutes.js` file should include two routes:

//   * A GET Route to `/survey` which should display the survey page.
//    * A default USE route that leads to `home.html` which displays the home page.

"use strict";
var express = require("express");
var app = express();
var path = require("path");

// HTML ROUTES

// app.use(express.static(path.join(__dirname, "public")));

module.exports = function(app){

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });
app.get("/survey", function(req, res) {
	console.log("route hit!!!");
	res.sendFile(path.join(__dirname, "/../public/survey.html"));
	console.log(__dirname);
});

};

// app.get("/tables", function(req, res){
// 	console.log(__dirname);
// 	res.sendFile(path.join(__dirname, "tables.html"));
//}),
// app.post("/api/new", function(req, res) {
//   var newreservation = req.body;
//   newreservation.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();

//   console.log(newreservation);

//   characters.push(newreservation);

//   res.json(newreservation);
// });