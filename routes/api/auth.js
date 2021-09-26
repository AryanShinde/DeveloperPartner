const express=require("express");
const router=express.Router();

//@route    "/api/auth"
//@desc     "auth route"
//@access   "public"    
router.get("/",(req,res)=>{
    res.send("auth router");
})

module.exports=router;
