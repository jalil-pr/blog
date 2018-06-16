var express=require("express");
var mongoose=require("mongoose");




mongoose.connect("mongodb://localhost/blog");

var app=express();






app.listen(3000,function()
	{
       console.log("server has started.");
	});







