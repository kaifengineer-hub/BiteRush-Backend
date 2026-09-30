const mongoose=require("mongoose")
const cartSchema= new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        unique:true
    },
    items : [
        {
        productId:{
            type:String,
            required:true
        },
        quantity:{
            type:Number,
            default:1
        }
    }
    ]
})
const Cart=mongoose.model("Cart",cartSchema)
module.exports=Cart;