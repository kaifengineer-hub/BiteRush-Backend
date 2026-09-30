const mongoose=require("mongoose");
mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.nu0bdnn.mongodb.net/Resturant?appName=Cluster0`)
.then(()=>{
    console.log("database is connected succesfully")
})
const productSchema=new mongoose.Schema({
    name:String,
    price:Number,
    img:String,
    id:Number
})
const Product=mongoose.model("Product",productSchema)
const cartSchema=new mongoose.Schema({
    productID:String,
    quantity:Number
})
const Cart=mongoose.model("cart",cartSchema)
const wishlistSchema=new  mongoose.Schema({
    productid:String,
    quantity:Number
})
const Wishlist=mongoose.model("wishlist",wishlistSchema)
module.exports={Product,Cart,Wishlist};