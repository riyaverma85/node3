
const homepage=(req,res)=>{
    res.render("home")
}
const insertpage=(req,res)=>{
    res.render("insert")
}

module.exports={
    homepage,
    insertpage
}