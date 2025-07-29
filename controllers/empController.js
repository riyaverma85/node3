
const empModel=require("../models/empModel")
const homepage=(req,res)=>{
    res.render("home")
}
const insertpage=(req,res)=>{
    res.render("insert")
}
const empSave=async(req,res)=>{
    const {name,sub,city,fees}=req.body;
    const empData=await empModel.create({
        name:name,
        subject:sub,
        city:city,
        fees:fees
    })
    console.log(req.body);
    res.render("insert")
}
const empDisplay=async(req,res)=>{
    const empData=await empModel.find();
    console.log(empData);
    res.render("display",{Data:empData})
}
const updatepage=async(req,res)=>{
    const empData=await empModel.find();
    console.log(empData);
    res.render("update",{Data:empData})
}


module.exports={
    homepage,
    insertpage,
    empSave,
    empDisplay,
    updatepage
}