"use strict";
var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");

var friendData = require("../data/friend");
module.exports = function(app){

app.get("/api/friend", function(req, res){
	res.json(friendData);
	console.log(friendData);

})

// AJAX post the data to the friends API. 
	    	app.post("/api/friend", function(data){

	    		// Grab the result from the AJAX post so that the best match's name and photo are displayed.
	    		$("#matchName").text(data.name);
	    		$('#matchImg').attr("src", data.photo);

		    	// Show the modal with the best match 
		    	$("#resultsModal").modal('toggle');

	    	});
}