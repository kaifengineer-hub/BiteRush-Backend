const express=require("express")
const signin=require("../controller/signinController")
const router =express.Router();
router.post("/",signin)
module.exports=router;