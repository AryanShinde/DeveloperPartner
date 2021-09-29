const express=require("express");
const router=express.Router();
const Profile=require("../../models/Profile");
const User=require("../../models/User");

//@route    "/api/profile/me"
//@desc     "get user profile"
//@access   "private"    
router.get("/me",auth,async (req,res)=>{
    try {
        const profile=await Profile.findOne({user:req.user.id}).populate("user",['name',"avatar"])
        if(!profile){
          return res.status(400).json({msg: "no profile found :("});
        }
        res.send(profile);
    } catch (error) {
        res.status(400).json({msg:error});
    }
})

module.exports=router;
