
const express=require("express")
const app=express();
const  routeData=require("./routes/empRoute")
app.use("/students",routeData)

app.listen(4000,()=>{
    console.log("Server is running on port 3000")
})