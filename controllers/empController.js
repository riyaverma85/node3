
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
const dataDelete=async(req,res)=>{
    const {id}=req.query;
    await empModel.findByIdAndDelete(id);
    const empData=await empModel.find();
    res.render("update",{Data:empData})
}
const dataEdit=async(req,res)=>{
    const {id}=req.query;
    const empData=await empModel.findById(id);
    console.log(empData)
    res.render("editdata",{Data:empData})
}
const editSave=async(req,res)=>{
    const {name,sub,city,fees}=req.body;
    await empModel.findByIdAndUpdate(id, {
        name:name,
        subject:sub,
        city:city,
        fees:fees
    })
    const empData= await empModel.find();
    res.render("update",{Data:empData})
}

module.exports={
    homepage,
    insertpage,
    empSave,
    empDisplay,
    updatepage,
    dataDelete,
    dataEdit,
    editSave
}