const User =require("../model/user")
const bcrypt=require("bcrypt")
const pushData=async(req,res)=>{
    try{
            const {username,password,number}=req.body
    
    const user = await User.findOne({username})
    if(user){
       return res.status(409).json({message:"user already exist"})
    }else{
        const hashedPassword= await bcrypt.hash(password,10)
        await User.create({
            username,
            hashedPassword,
            number
        })
       return res.status(201).json({message:"added succesfully"})
    }

    }catch(err){
        res.status(500).json({message:"internal server error"})
    }



}
module.exports=pushData