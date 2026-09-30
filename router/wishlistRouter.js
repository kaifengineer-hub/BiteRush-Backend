const express=require("express")

const router=express.Router()
const{getData,postData,deleteData,updateData, deleteAll}=require("../controller/wishlistController")

router.get("/",getData)
router.post("/",postData)
router.put("/:id",updateData)
router.delete("/:id",deleteData)
router.delete("/",deleteAll)
module.exports=router