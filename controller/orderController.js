const Order = require("../model/order")
const postData=async(req,res)=>{
    try{
    const userid=req.user.userid
    console.log(userid)
    const{finalCart,form}=req.body
    console.log(finalCart)
    console.log(form)
     await Order.create({userid,
        items:finalCart.map((item)=>({
            productId:item._id,
            quantity:item.quantity
        })),
     name: form.name,
      phone: form.phone,
      address: form.address,
      payment: form.payment
  });
  
  return res.status(201).json({message:"order placed successfully"})
}catch(err){
    return res.status(500).json({message:err.message})
}
}
const getData=async(req,res)=>{
    try{
    const userid=req.user.userid
    const orders=await Order.find({userid}).populate("items.productId")
    console.log(orders)
    res.status(200).json({message:"fetched succesfully",orders})
    }catch(err){
        return res.status(500).json({message:err.message})
    }

}
module.exports={getData,postData}