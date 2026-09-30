const express=require("express")
const pushData=require("../controller/userController")
const router= express.Router()
router.post("/",pushData)
module.exports=router