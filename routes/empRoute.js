
const express=require("express");
const route=express.Router();
const empControll=require("../controllers/empController")

route.get("/home", empControll.homepage)
    

module.exports=route;