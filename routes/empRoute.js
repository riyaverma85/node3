
const express=require("express");
const route=express.Router();
const empControll=require("../controllers/empController")

route.get("/", empControll.homepage)
route.get("/insert", empControll.insertpage)
route.post("/save", empControll.empSave)
    

module.exports=route;