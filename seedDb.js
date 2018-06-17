var Post=require("./modules/blog");


var posts=[
   {
   	title:"Jaghori",
   	url:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Friday_Mosque_in_Herat%2C_Afghanistan.jpg/300px-Friday_Mosque_in_Herat%2C_Afghanistan.jpg",
   	desc:"actually its ok!!!",
   	
   },
   {
   	title:"Herat",
   	url:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Friday_Mosque_in_Herat%2C_Afghanistan.jpg/300px-Friday_Mosque_in_Herat%2C_Afghanistan.jpg",
   	desc:"actually its ok!!!",
   	
    }
    ,
    {
   	title:"Kabul",
   	url:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Friday_Mosque_in_Herat%2C_Afghanistan.jpg/300px-Friday_Mosque_in_Herat%2C_Afghanistan.jpg",
   	desc:"actually its ok!!!",

   },
   {
   	title:"Jaghori",
   	url:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Friday_Mosque_in_Herat%2C_Afghanistan.jpg/300px-Friday_Mosque_in_Herat%2C_Afghanistan.jpg",
   	desc:"actually its ok!!!",
   	
   },
   {
   	title:"Jaghori",
   	url:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Friday_Mosque_in_Herat%2C_Afghanistan.jpg/300px-Friday_Mosque_in_Herat%2C_Afghanistan.jpg",
   	desc:"actually its ok!!!",
   	
   }
 ];

 var cultivate=function()
 {
 	//remove all the posts
 	Post.remove({},function(err)
 	{
 		if(err)
 		{
 			console.log(err);
 		}
 		else
 		{
 			console.log("deleted all the camps");
 			// add them all again
		 	posts.forEach(function(data)
		 		{
			 		Post.create(data,function(err,createdPost)
			 		{
			 			if(err)
			 			{
			 				console.log(err);
			 			}
			 			else
			 			{
			 				console.log("created a post");
			 			}
			 		})

		 	})

 		}
 	})
 	
 	
 };

 module.exports=cultivate;



