const express=require("express")
const router=express.Router();
const {getData,postData,deleteAll,updateData}=require("../controller/productController")

router.get("/",getData)
router.post("/",postData)
router.delete("/",deleteAll)
router.put("/:id",updateData)
module.exports=router;