
const mongoose=require("mongoose");
const empSchema=new mongoose.Schema({
       name:String,
       subject:String,
       city:String,
       fees:Number
})
module.exports=mongoose.model("student",empSchema)