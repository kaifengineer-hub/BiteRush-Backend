const express=require("express")
const cors=require("cors")
require("dotenv").config();
const productRouter=require("./router/productRouter")
const cartRouter=require("./router/cartRouter")
const wishlistRouter=require("./router/wishlistRouter")
const userRouter=require("./router/userRouter")
const signinRouter=require("./router/signinRouter")
const orderRouter=require("./router/orderRouter")

const profileRouter=require("./router/profileRouter")
const logoutRouter=require("./router/logoutRouter")
const cookieParser = require("cookie-parser");
const app=express();
app.use(express.json())
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));
app.use(cookieParser());
app.use("/products",productRouter)
app.use("/cart",cartRouter)
app.use("/wishlist",wishlistRouter)
app.use("/signup",userRouter)
app.use("/profile",profileRouter)
app.use("/signin",signinRouter) 
app.use("/logout",logoutRouter)
app.use("/orders",orderRouter)

app.listen(process.env.PORT,()=>{ 
    console.log(`server is litening on port ${process.env.PORT}`)})