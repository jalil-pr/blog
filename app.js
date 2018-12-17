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
app.use(express.static(__dirname+"/public"));

//seedDb();

// index route
app.get("/",function(req,res)
{
	// show the menu bar and the swapping images
	res.render("auth/index");
    // Posts.find({},function(err,posts)
    // {
    // 	if(err)
    // 	{
    // 		console.log(err);

    // 	}
    // 	else
    // 	{
    // 		//send it to the index page
    // 		res.render("blogs/indes",{posts:posts});

    // 	}
    // })
	
	
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


// comment new route
app.get("/post/:id/comment",function(req,res)
{
	Posts.findById(req.params.id,function(err,foundPost)
	{
		if(err)
		{
			console.log(err);
		}
		else
		{
			res.render("comments/new",{post:foundPost});
		}

	})
	
});



// comment post route
app.post("/post/:id",function(req,res)
{
      
 
});



app.listen(3000,function()
	{developer
       console.log("server has started.");
    }
   );







