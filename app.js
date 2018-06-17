var express=require("express");
var mongoose=require("mongoose");
var seedDb=require("./seedDb");
var ejs=require("ejs");
var bodyParser=require("body-parser");
var Posts=require("./modules/blog");


mongoose.connect("mongodb://localhost/blog_posts");

var app=express();
app.use(bodyParser.urlencoded({extende:true}));
app.set("view engine","ejs");
//seedDb();

// index route
app.get("/",function(req,res)
{
	//res.send("you are always welcome!");
	// find all the  posts
    Posts.find({},function(err,posts)
    {
    	if(err)
    	{
    		console.log(err);

    	}
    	else
    	{
    		//send it to the index page
    		res.render("blogs/indes",{posts:posts});

    	}
    })
	
	
});

app.get("/post/:id",function(req,res)
{
	//res.send("you hitted the show route");
	// find the corresponding post
	Posts.findById(req.params.id,function(err,foundPost)
	{
		if(err)
		{
			console.log(err);

		}
		else
		{
			// send it to the show page
	        res.render("blogs/show",{post:foundPost});

		}

	});
	
});



app.listen(3000,function()
	{
       console.log("server has started.");
    }
   );







