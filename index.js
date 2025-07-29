
const express=require("express")
const app=express();
const  routeData=require("./routes/empRoute")
const mongoose=require("mongoose");
const bodyparser=require("body-parser")
mongoose.connect("mongodb://127.0.0.1:27017/prodb").then(()=>{
    console.log("database successfully added")
})
app.use("/",routeData)
app.set("view engine","ejs")

//Bodyparser middleware
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());


app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})