const Cart =require("../model/cart")
const fetchData=async(req,res)=>{
    try{
        const userid=req.user.userid

    const cart=await Cart.findOne({user:userid})
    if(!cart){
        return res.status(404).json({message:"no cart exist"})
    }
    res.status(200).json(cart)
    }catch(err){
        res.status(500).json({message:"something went wrong",
           error: err.message
            
        })
    }
}
const deleteData=async(req,res)=>{
    try{
    const userid=req.user.userid
    await Cart.findOneAndDelete({user:userid})
    return res.status(200).json({message:"deleted successfully"})
    }catch(err){
        return res.status(500).json({message:err.message})
    }
}
const postData = async (req, res) => {
    try {
        const userid=req.user.userid
       
        const {  productId } = req.body;

        console.log("userid:", userid);
        console.log("productId:", productId);

        const cart = await Cart.findOne({ user: userid });

        console.log("cart:", cart);

        if (!cart) {
            await Cart.create({
                user: userid,
                items: [
                    {
                        productId: productId,
                        quantity: 1
                    }
                ]
            });

            return res.status(201).json({
                message: "cart created successfully"
            });
        }

        console.log("before find");

        const item = cart.items.find(
            (item) =>
                item.productId.toString() === productId.toString()
        );

        console.log("found item:", item);

        if (item) {
            console.log("increasing quantity");

            item.quantity += 1;
        } else {
            console.log("adding new item");

            cart.items.push({
                productId: productId,
                quantity: 1
            });
        }

        console.log("before save");

        await cart.save();

        console.log("after save");

        return res.status(200).json({
            message: "cart updated"
        });

    } catch (err) {
        console.log(err);

        return res.status(500).json({
            message: "Something went wrong",
            error: err.message
        });
    }
};
const remove = async (req, res) => {
  try {
    const userid = req.user.userid;
    const { productId } = req.body;
    console.log("Body:", req.body);
console.log("productId:", productId);

    const cart = await Cart.findOne({ user: userid });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }
    console.log("Cart items:", cart.items);

    cart.items = cart.items.filter(
      (item) => item.productId.toString() !== productId.toString()
    );

    await cart.save();

    return res.status(200).json({ message: "Removed successfully" });

  } catch (err) {
    console.log(err); 
    return res.status(500).json({ message: err.message });
  }
};
const increement = async (req, res) => {
    try {
       const userid=req.user.userid
        const { productId } = req.body;

        const cart = await Cart.findOne({ user: userid });

        if (!cart) {
            return res.status(404).json({
                message: "Cart not found"
            });
        }

        const item = cart.items.find(
            (item) =>
                item.productId.toString() === productId.toString()
        );

        if (!item) {
            return res.status(404).json({
                message: "Item not found"
            });
        }

       else if (item.quantity >= 5) {
            return res.status(409).json({
                message: "Maximum limit reached"
            });
        }

        else{item.quantity += 1;

        await cart.save();

        return res.status(200).json({
            message: "Quantity increased"
        });
    }

    } catch (err) {
        console.log(err);

        return res.status(500).json({
            message: "Something went wrong",
            error: err.message


        });
    }
};
const decreement=async(req,res)=>{
    const userid=req.user.userid
    const {productId}=req.body;
    const cart = await Cart.findOne({user:userid})
    if(!cart){
        return res.status(409).json({message:"no user found"})
    }else{
    const item =  cart.items.find((product)=>product.productId.toString()===productId.toString())
     if(!item){
    return res.status(409).json({message:"item not found"})
 }else{
    item.quantity-=1
    if(item.quantity==0){
        cart.items =  cart.items.filter((item)=>item.productId!==productId)
    }
 }
 await cart.save()
 return res.status(201).json({message:"updated successfully"})
    }

 
      
         
    

}
module.exports={increement,fetchData,postData,decreement,remove,deleteData}