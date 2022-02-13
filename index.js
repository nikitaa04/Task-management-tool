const express=require("express");
const port=8000;
const path=require("path");
const dp=require("./config/mongoose");
const todo=require("./modules/todolist");
var app=express();



app.set('view engine','ejs');
app.set("view"+path.join(__dirname+"views"));
app.use(express.urlencoded());
app.use(express.static("public"));



app.get("/",function(req,res){
   
   todo.find({},function(err,todolist){
     if(err){
      console.log("error"); 
      return;
       }
     console.log(todolist);  
     res.render("home",{ listtodo : todolist });
    });  

});


app.get('/delete/',function(req,res){

  var id=req.query.id;
  todo.findByIdAndDelete(id,function(err){
      if(err){
          console.log(err);
          return;
      }
     else{
       console.log("deleted");
      res.redirect("/"); }
  });


});






app.post("/create",function(req,res){
    
  todo.create({
     name : req.body.worktodo,
     category : req.body.category,
     date : req.body.date
   },function(err,newitem){

     if(err){ console.log("error"); return;}   
     console.log(newitem);
     res.redirect("/");
     
   });
   
});



app.listen(port,function(req,res){

    console.log("server is running at",port);

});