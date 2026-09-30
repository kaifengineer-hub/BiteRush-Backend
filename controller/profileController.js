const User=require("../model/user")

const getData=async(req,res)=>{
    try{
        console.log(req.user)
        const username=req.user.username
    const user = await User.findOne({username})
    res.status(200).json({user})
    }catch(err){
        console.log(err)
        return res.status(500).json({message:err})
    }
}
module.exports = getData;