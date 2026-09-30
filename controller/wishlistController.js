const {Wishlist}=require("../model/database")
const getData=async(req,res)=>{
    const wish=await Wishlist.find()
    res.status(200).json(wish)

}
const postData=async(req,res)=>{
    await Wishlist.create(req.body)
    res.status(201).json({message:"added succesfully"})
    
}
const updateData=async(req,res)=>{
    const updated =await Wishlist.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    )
    res.status(201).json(updated)
    
}
const deleteData=async(req,res)=>{
    await Wishlist.findByIdAndDelete(req.params.id)
      res.status(200).json({
    message: "Wishlist item deleted successfully",
  });
    
}
const deleteAll=async(req,res)=>{
    await Wishlist.deleteMany({})
    res.status(200).json({message:"all items deleted"})
}
module.exports={getData,updateData,deleteData,postData,deleteAll}