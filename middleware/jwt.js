const jwt=require("jsonwebtoken")
const jwtAuthMiddleWare=(req,res,next)=>{
   try{ const token = req.cookies.token
    if(!token)return res.status(401).json({message:"token not found"})
        const decode = jwt.verify(token,process.env.SECRET)
    req.user=decode
    next()
}catch(err){
    res.status(500).json({message:"internal server error"})
}

}
const generateToken=(payload)=>{
    return jwt.sign(payload,process.env.SECRET)
    
}
module.exports={generateToken,jwtAuthMiddleWare}