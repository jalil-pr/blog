var mongoose=require("mongoose");
var localMongoose=require("passport-local-mongoose");



var userSchema=new mongoose.Schema({
	name:String,
	password:String
});
userSchema.plugin(localMongoose);



module.exports=mongoose.model("User",userSchema); 