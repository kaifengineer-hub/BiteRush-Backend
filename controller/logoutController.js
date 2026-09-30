const logout=(req,res)=>{
    try{
    res.status(200).clearCookie("token",{
        httpOnly:true,
        secure:false,
        sameSite:"strict"
    }).json({message:"logout successful"})
}catch(err){
    res.status(500).json({message:"internal server error"})
}
}
module.exports=logout