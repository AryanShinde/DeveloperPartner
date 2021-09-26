const express=require("express");
const router=express.Router();

//@route    "/api/profile"
//@desc     "profile route"
//@access   "public"    
router.get("/",(req,res)=>{
    res.send("profile router");
})

module.exports=router;
