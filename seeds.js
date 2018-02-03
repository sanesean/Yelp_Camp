var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");
var data=[
    {name:"camp1",image:"http://cs-server.usc.edu:45678/hw/hw3/images/image6.jpg",description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."},
    {name:"camp2",image:"http://cs-server.usc.edu:45678/hw/hw3/images/image5.jpg",description:"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."},
    {name:"camp3",image:"http://cs-server.usc.edu:45678/hw/hw3/images/image4.jpg",description:"Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat."}
    ];
function seedDB(){
    Campground.remove({},function(err){
    if(err){
        console.log(err);
    }
    });
    
    // //add new ones
    // for(var i=0;i<data.length;i++){
    //     Campground.create(data[i],function(err,d){
    //         if(err){
    //             console.log(err);
    //         }else{
    //             //create comment
    //             Comment.create({text:"This is a great picture",author:"Deze Nuts"},function(err,comment){
    //               if(err){
    //                   console.log(err);
    //               } else{
    //                   d.comments.push(comment._id);
    //                   d.save();
    //               }
    //             });
    //         }
    //     });
    // };
}

module.exports = seedDB;
