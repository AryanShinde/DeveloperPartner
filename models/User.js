const mongoose=require("mongoose");
const UserModel=new mongoose.Schema({
    name:{
        type: String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    avatar:{
        type:String,
    }
})
module.exports=User=mongoose.model("user",UserModel);