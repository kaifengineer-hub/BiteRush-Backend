const express=require("express")
const {getData,postData}=require("../controller/orderController")
const {jwtAuthMiddleWare}=require("../middleware/jwt")
const router=express.Router()
router.get("/",jwtAuthMiddleWare,getData)
router.post("/",jwtAuthMiddleWare,postData)
module.exports=router