var express=require("express"),
    app=express(),
    mongoose=require("mongoose"),
    bodyParser=require("body-parser"),
    Campground = require("./models/campground"),
    seedDB=require("./seeds"),
    Comment = require("./models/comment"),
    passport=require("passport"),
    LocalStrategy=require("passport-local"),
    User= require("./models/user"),
    MethodOverride=require("method-override");
var commentRoutes=require("./routes/comments"),
    campgroundRoutes=require("./routes/campgrounds"),
    indexRoutes=require("./routes/index");
    
//seedDB();
mongoose.connect("mongodb://localhost/yelp_camp");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + "/public"));
app.use(MethodOverride("_method"));
app.set("view engine","ejs");
//passport config
app.use(require("express-session")({
    secret:"hahaha",
    resave:false,
    saveUninitialized:false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());//encode session to ensure login user
passport.deserializeUser(User.deserializeUser());//decode
app.use(function(req,res,next){
    res.locals.currentUser = req.user;
    next();
});

app.use(indexRoutes);
app.use("/campgrounds/:id/comments",commentRoutes);
app.use("/campgrounds",campgroundRoutes);


app.listen(process.env.PORT,process.env.IP,function(){
    console.log("The YelpCamp Server has started!");
});