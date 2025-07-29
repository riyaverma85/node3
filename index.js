
const express=require("express")
const app=express();
const  routeData=require("./routes/empRoute")
// const mongoose=require("mongoose");

app.use("/",routeData)
app.set("view engine","ejs")


app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})