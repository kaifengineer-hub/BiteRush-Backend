const express=require("express")
const router=express.Router();
const {jwtAuthMiddleWare} =require("../middleware/jwt")

const {postData,fetchData,increement,decreement,remove,deleteData}=require("../controller/newCartController")
router.get("/",jwtAuthMiddleWare,fetchData)
router.post("/",jwtAuthMiddleWare,postData);
router.delete("/",jwtAuthMiddleWare,deleteData)
router.put("/increement",jwtAuthMiddleWare,increement);
router.put("/decreement",jwtAuthMiddleWare,decreement)
router.put("/remove",jwtAuthMiddleWare,remove)
module.exports=router;