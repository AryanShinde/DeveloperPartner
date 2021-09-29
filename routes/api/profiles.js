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
        }).populate("user", ['name', "avatar"])
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

    const profileFields = {}
    profileFields.user = req.user.id;
    if (company) profileFields.company = company;
    if (website) profileFields.website = website;
    if (location) profileFields.location = location;
    if (status) profileFields.status = status;
    if (bio) profileFields.bio = bio;
    if (githubusername) profileFields.githubusername = githubusername;
    if (skills) {
        profileFields.skills = skills.split(',').map((skill)=>skill.trim());
    }
    profileFields.Socials = {}
    if (youtube) Socials.youtube = youtube;
    if (twitter) Socials.twitter = twitter;
    if (facebook) Socials.facebook = facebook;
    if (linkedin) Socials.linkedin = linkedin;

    //make this object into a Profile 
    try {

        let profile = await Profile.findOne({
            user: req.user.id
        });
        //if profile not found then make it
        if (!profile) {
            profile = new Profile(profileFields);
            return res.send(profile);
        }
        //if profile found then update it
        profile = await Profile.findByIdAndUpdate(
            {user: req.user.id},
            {$set: profileFields},
            {new: true}
            );
        res.send(profile);

    } catch (error) {
        console.error(error.message);
        res.send("server error");
    }
})

module.exports = router;