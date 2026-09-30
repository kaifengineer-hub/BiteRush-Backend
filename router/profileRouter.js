
const getData = require("../controller/profileController")
const {jwtAuthMiddleWare}=require("../middleware/jwt")
const express=require("express")
const router= express.Router()
router.get("/",jwtAuthMiddleWare,getData)
module.exports=router