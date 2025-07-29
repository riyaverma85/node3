
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

module.exports={
    homepage,
    insertpage,
    empSave
}