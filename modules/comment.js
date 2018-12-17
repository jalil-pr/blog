var mongoose=require("mongoose");


var CommentsSchema = new mongoose.Schema({
   text:String,
   author:{
   	id:{
   		type:mongoose.Schema.Types.ObjectId,
   		ref:"User"
   	},
   	name:String
   }

});

module.exports=mongoose.model("Comment",CommentsSchema);