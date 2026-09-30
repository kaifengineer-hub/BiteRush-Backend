const mongoose =require("mongoose")
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    number:{
        type:Number,
        required:true
    },
    hashedPassword:{
        type:String,
        required:true
    },
   photo:{
    type:String
   }
})
const User =mongoose.model("User",userSchema)
module.exports=User