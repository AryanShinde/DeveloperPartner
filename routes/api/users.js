const express=require("express");
const {check, validationResult} =require("express-validator");

const router=express.Router();

//@route    "/api/user"
//@desc     "register user"
//@access   "public"    
router.post("/",[
    check("name","please enter a valid name").not().isEmpty(),
    check("email","please enter a valid name").isEmail(),
    check("password","please enter atleast 6 char").isLength({min:8}),
],(req,res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        res.status(400).json({errors: errors.array()});
        return;
    }
    res.send(req.body);
})

module.exports=router;
