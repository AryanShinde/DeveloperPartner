const express=require("express");
const {check, validationResult} =require("express-validator");
const gravatar=require("gravatar");
const jwt=require("jsonwebtoken");
const config=require("config");

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

try{
    const {name,email,password}=req.body;
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
    user=await new User({
        name,
        email,
        password,
        avatar: profilePic
    })
    //encryt the password
    const salt= await bcrypt.genSalt(10);
    user.password=await bcrypt.hash(password,salt);

    await user.save()
    

    //JWT Token
    const payload={
        user:{
            id:user.id,
        }
    }
    jwt.sign(
        payload,
        config.get("jwtToken"),
        {expiresIn:3600000},
        (err,token)=>{
            if(err){throw err;}
            else {res.json({token});}
        })
}
catch(err){
    return res.status(500).json({msg:[{error:err.message}]})
}
})

module.exports=router;
