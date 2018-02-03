var express=require("express");
var router=express.Router({mergeParams:true});
var Campground=require("../models/campground");
var Comment=require("../models/comment");
router.get("/new",isLoggedIn,function(req,res){
    var id=req.params.id;
    Campground.findById(id,function(err,found){
       if(err){
           console.log(err);
       } else{
            res.render("comments/new",{campground:found});
       }
    });
   
});

router.get("/:comment_id/edit",function(req,res){
    Comment.findById(req.params.comment_id,function(err,foundComment){
       if(err){
           console.log(err);
       } else {
           console.log(foundComment);
            res.render("comments/edit",{campground_id: req.params.id, comment: foundComment});
       }
    });
    
});

router.put("/:comment_id/",function(req,res){
    Comment.findByIdAndUpdate(req.params.comment_id,req.body.comment,function(err,found){
        if(err){
            console.log(err);
        }else{
           // console.log(found);
            //console.log(req.body.comment);
            Comment.findById(req.params.comment_id,function(err,data){
                if(err) console.log(err);
            //    console.log(data+"********");
            });
            res.redirect("/campgrounds/"+req.params.id);
        }
    });
});

router.post("/",isLoggedIn,function(req,res){
    //lookup
    Campground.findById(req.params.id,function(err,found){
        if(err){
           console.log(err);
       } else{
            //create 
            Comment.create(req.body.comment,function(err,comment){
                if(err){
                    console.log("A");
                }else{
                    //save to the campground
                    comment.author.id=req.user._id;
                    comment.author.username=req.user.username;
                    comment.save();
                    found.comments.push(comment._id);
                    console.log(found)
                    found.save();
                    res.redirect("/campgrounds/"+req.params.id);
                }
            })
       }
    })
});
module.exports=router;
//middleware
function isLoggedIn(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
};