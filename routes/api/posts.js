const express=require("express");
const router=express.Router();

//@route    "/api/post"
//@desc     "post route"
//@access   "public"    
router.get("/",(req,res)=>{
    res.send("post router");
})

module.exports=router;
