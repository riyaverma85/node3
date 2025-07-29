
const express=require("express");
const route=express.Router();
const empControll=require("../controllers/empController")

route.get("/", empControll.homepage)
route.get("/insert", empControll.insertpage)
route.post("/save", empControll.empSave)
route.get("/display",empControll.empDisplay)
route.get("/update",empControll.updatepage)
route.get("/datadelete",empControll.dataDelete)
route.get("/editdata",empControll.dataEdit)
route.post("/editsave",empControll.editSave)

module.exports=route;