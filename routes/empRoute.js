
const express=require("express");
const route=express.Router();
const empControll=require("../controllers/empController")

route.get("/", empControll.homepage)
route.get("/insert", empControll.insertpage)
    

module.exports=route;