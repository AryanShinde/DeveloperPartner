const express = require("express");
const router = express.Router();
const Profile = require("../../models/Profile");
const User = require("../../models/User");
const auth=require("../../MiddleWare/auth")

const {
    check,
    validationResult
} = require("express-validator");


//@route    "/api/profile/me"
//@desc     "get user profile"
//@access   "private"    
router.get("/me", auth, async (req, res) => {
    try {
        const profile = await Profile.findOne({
            user: req.user.id
        }).populate("user", ['name', "avatar"]);
        if (!profile) {
            return res.status(400).json({
                msg: "no profile found :("
            });
        }
        res.send(profile);
    } catch (error) {
        res.status(400).json({
            msg: error
        });
    }
})

//create and update profile
router.post("/", [auth, [
    check("status", "this field is required"),
    check("skills", "this field is required")
]], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({
            errors: errors.array()
        });
    }
    //create a object for profile
    const {
        company,
        website,
        location,
        status,
        skills,
        bio,
        githubusername,
        youtube,
        twitter,
        facebook,
        linkedin
    } = req.body;
    console.log(twitter);

    const profileFields = {}
    profileFields.user = req.user.id;
    if (company){profileFields.company = company;}
    if (website) {profileFields.website = website;}
    if (location){ profileFields.location = location;}
    if (status){ profileFields.status = status;}
    if (bio){profileFields.bio = bio;}
    if (githubusername) {profileFields.githubusername = githubusername;}
    if (skills) {
        profileFields.skills = skills.split(',').map((skill)=>skill.trim());
    }
    profileFields.Socials = {}
    if (youtube) profileFields.Socials.youtube = youtube;
    if (twitter) profileFields.Socials.twitter = twitter;
    if (facebook) profileFields.Socials.facebook = facebook;
    if (linkedin) profileFields.Socials.linkedin = linkedin;

    //make this object into a Profile 
    try {

        let profile = await Profile.findOne({
            user: req.user.id
        });
        //if profile found then update it

        if (profile) {
            profile = await Profile.findOneAndUpdate(
                {user: req.user.id},
                {$set: profileFields},
                {new: true}
                );
                console.log("work?")
            return res.send(profile);
        }
        //if profile not found then make it

        profile = new Profile(profileFields);
        await profile.save();
        res.send(profile);

    } catch (error) {
        console.error(error.message);
        res.send("server error");
    }
})



//@route    "/api/profile"
//@desc     "get all profile"
//@access   "public"
router.get("/",async (req,res)=>{
    try {
        const profiles=await Profile.find().populate("user",["name","avatar"]);
        res.json(profiles);
    } catch (error) {
        console.error(error);
        res.send("server error");
    }
})


//@route    "/api/profiles/user/:user_id"
//@desc     "get particular user profile"
//@access   "public"

router.get("/user/:user_id",async (req,res)=>{
    try{
    const profile= await Profile.findOne({user:req.params.user_id}).populate("user",["name","avatar"]);
    if(!profile){
       return res.json({msg:"no profile found"});
    }
    res.json(profile);
}
catch(error){
    console.error(error);
    res.json({msg:"server error"});
}
})



//@route    "/api/profiles/"
//@desc     "delete profile, user and post"
//@access   "private"
//@todo-    "posts"

router.delete("/",auth,async (req,res)=>{
    try{ 
    await Profile.findOneAndRemove({user:req.user.id});
    await User.findOneAndRemove({_id:req.user.id});
    res.json({msg: "profile and user deleted"});
}
catch(error){
    console.error(error);
    res.json({msg:"server error"});
}
})

//@route    "/api/profiles/experience"
//@desc     "update experience"
//@access   "private"

router.put("/experience",[auth,[
    check("title","this is a required field").not().isEmpty(),
    check("company","this is a required field").not().isEmpty(),
    check("from","this is a required field").not().isEmpty()
]], async (req,res)=>{

    try{

    const errors=validationResult(req);
    if(!errors.isEmpty()){
       return res.send({errors:errors.array()});
    }
    const {
        title,
        company,
        location,
        from,
        to,
        current,
        description
    }=req.body;

    const exp={
        title,
        company,
        location,
        from,
        to,
        current,
        description
    }

    const profile=await Profile.findOne({user: req.user.id});
    profile.experience.unshift(exp);
    

    const newProfile=await profile.save();
    res.json(newProfile);
}
catch(error){
    res.status(500).json({msg: "server error"});
    console.error(error);
}
});



//@route    "/api/profiles/experience/:exp_id"
//@desc     "delete experience"
//@access   "private"

router.delete("/experience/:exp_id",auth,async (req,res)=>{
    try{
        let profile=await Profile.findOne({user: req.user.id});
        const expIndex=profile.experience.map((exp)=>exp.id).indexOf(req.params.exp_id);
        profile.experience.splice(expIndex,1);
        await profile.save();
        res.json(profile);
    }
    catch(error){
        console.error(error);
        res.status(400).json({msg: "server error"});
    }
})

//@route    "/api/profiles/education"
//@desc     "update education"
//@access   "private"

router.put("/education",[auth,[
    check("school","this field is required").not().isEmpty(),
    check("degree","this field is required").not().isEmpty(),
    check("fieldofstudy","this field is required").not().isEmpty(),
    check("from","this field is required").not().isEmpty()
]],async (req,res)=>{
    try{
    const errors=validationResult(req);
    if(!errors.isEmpty())
    {
        return res.status(400).json({errors: errors.array()});
    }
    const {
        school,
        degree,
        fieldofstudy,
        from,
        to,
        current,
        description
    }=req.body;

    const edu={
        school,
        degree,
        fieldofstudy,
        from,
        to,
        current,
        description
    }
    
        const profile=await Profile.findOne({user: req.user.id});
        profile.education.unshift(edu);
        await profile.save();
        res.json(profile);
    }
    catch(error){
        console.error(error);
        res.status(400).json({error: error});
    }
})


//@route    "/api/profiles/education"
//@desc     "delete education"
//@access   "private"
router.delete("/education/:edu_id",auth,async(req,res)=>{
    const profile=await Profile.findOne({user: req.user.id});
    const eduIndex=profile.education.map((edu)=>edu.id).indexOf(req.params.edu_id);

    profile.education.splice(eduIndex,1);
    await profile.save();
    res.json(profile);

})


module.exports = router;