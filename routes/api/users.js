const express=require("express");
const {check, validationResult} =require("express-validator");
const gravatar=require("gravatar");
const jwt=require("jsonwebtoken");

const bcrypt=require("bcryptjs");

const User=require("../../models/User");

const router=express.Router();

//@route    "/api/user"
//@desc     "register user"
//@access   "public"    
router.post("/",[
    check("name","please enter a valid name").not().isEmpty(),
    check("email","please enter a valid name").isEmail(),
    check("password","please enter atleast 6 char").isLength({min:8}),
], async(req,res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        res.status(400).json({errors: errors.array()});
        return;
    }

    const {name,email,password}=req.body;
try{
    //check if user exist
    let user=await User.findOne({email});
    if(user){
        return res.status(400).json({error:"user already registered"});
    }

    //get the avatar
    const profilePic=gravatar.url(email,{
        s:"200",
        r:"pg",
        d:"retro"
    })

    //if not then register user
    user=new User({
        name,
        email,
        password,
        avatar: profilePic
    })
    //encryt the password
    const salt= await bcrypt.genSalt(10);
    user.password=await bcrypt.hash(password,salt);
    res.send("user registered");

    await user.save()
    

    //JWT Token




}
catch(err){
    return res.status(500).json({msg:[{error:err.message}]})
}




    res.send(req.body);
})

module.exports=router;
