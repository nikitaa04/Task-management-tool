const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/todolist",{ useNewUrlParser: true , useUnifiedTopology: true });

const db = mongoose.connection;


db.on("error",console.error.bind(console,"error connected to db"));

db.once("open",function(){
    console.log("successfully connected");
});
