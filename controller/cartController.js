const {Cart}=require("../model/database")
const getData=async(req,res)=>{
   const cartData= await Cart.find()
   res.status(200).json(cartData)

}
const postData=async(req,res)=>{
    await Cart.create(req.body)
    res.status(201).json({message:"added succesfully"})
    
}
const updateData=async(req,res)=>{
    const updated =await Cart.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    )
    res.status(201).json(updated)
    
}
const deleteData=async(req,res)=>{
    await Cart.findByIdAndDelete(req.params.id)
    
}
const deleteAll=async(req,res)=>{
    await Cart.deleteMany({})
    res.status(200).json({message:"all items deleted"})
}
module.exports=({getData,postData,updateData,deleteData,deleteAll})