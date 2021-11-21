const express = require("express");
const router = express.Router();
const auth = require("../../MiddleWare/auth");
const { check, validationResult } = require("express-validator");
const User = require("../../models/User");
const Post = require("../../models/Post");
const Profile = require("../../models/Profile");

//@route    "/api/posts"
//@desc     "post route"
//@access   "private"
router.post(
  "/",
  [auth, [check("text", "text is required").not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(500).send({ errors: errors.array() });
    }
    try {
      const user = await User.findById(req.user.id).select("-password");
      const profile = await Profile.findOne({ user: req.user.id });
      const Bio = profile ? (profile.bio ? profile.bio : "") : "";
      const newPost = {
        user: req.user.id,
        text: req.body.text,
        name: user.name,
        avatar: user.avatar,
        bio: Bio,
      };
      const post = await new Post(newPost);
      await post.save();
      res.send(post);
    } catch (error) {
      console.error(error);
      res.status(400).json({ msg: "server error" });
    }
  }
);

//@route    "/api/posts"
//@desc     "get all posts"
//@access   "private"
router.get("/", auth, async (req, res) => {
  try {
    const posts = await Post.find().sort({ date: -1 });
    res.send(posts);
  } catch (error) {
    console.error(error);
    res.status(400).send({ error: error });
  }
});

//@route    "/api/posts"
//@desc     "Delete particular posts"
//@access   "private"
router.delete("/:id", auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    const posts = await Post.find().sort({ date: -1 });
    //check if that post actually exists or not
    if (!post) {
      return res.status(404).send("post not found");
    }
    if (post.user.toString() === req.user.id) {
      await post.remove();
    } else {
      return res.status(401).send("user not authorized");
    }
    res.send(posts);
  } catch (error) {
    if (error.kind === "ObjectId") {
      return res.status(404).send("post not found");
    }
    console.error(error);
    res.status(400).send({ error: error });
  }
});

//@route    "/api/posts/likes/:id"
//@desc     "PUT likes"
//@access   "private"
router.put("/likes/:id", auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    //check if user has already liked it,
    if (
      post.likes.filter((like) => like.user.toString() === req.user.id).length >
      0
    ) {
      return res.status(400).send("post already liked");
    }
    post.likes.unshift({ user: req.user.id });
    await post.save();
    res.send(post.likes);
  } catch (error) {
    if (error.kind === "ObjectId") {
      return res.status(404).send("post not found");
    }
    console.error(error);
    res.status(400).send({ error: error });
  }
});

//@route    "/api/posts/comments/:id"
//@desc     "comment on the post"
//@access   "private"
router.post(
  "/comments/:id",
  [auth, [check("text", "text is required").not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(500).send({ errors: errors.array() });
    }
    try {
      const user = await User.findById(req.user.id).select("-password");
      const newComment = {
        user: req.user.id,
        text: req.body.text,
        name: user.name,
        avatar: user.avatar,
      };
      const post = await Post.findById(req.params.id);
      post.comments.unshift(newComment);
      await post.save();
      res.send(post.comments);
    } catch (error) {
      if (error.kind === "ObjectId") {
        return res.status(404).send("post not found");
      }
      console.error(error);
      res.status(400).send({ error: error });
    }
  }
);

router.delete("/comments/:id/:commentId", auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    const comment = post.comments.find(
      (comm) => comm.id === req.params.commentId
    );
    //check if that comment exists
    if (!comment) {
      return res.status(404).json({ msg: "comment not found" });
    }
    // check if its the user
    if (comment.user.toString() !== req.user.id) {
      return res.status(400).send({ msg: "authorization denied" });
    }
    const commIndex = post.comments.indexOf(comment);
    post.comments.splice(commIndex, 1);
    await post.save();
    res.send(post.comments);
  } catch (error) {
    if (error.kind === "ObjectId") {
      return res.status(404).send("post not found");
    }
    console.error(error);
    res.status(400).send({ error: error });
  }
});

module.exports = router;
