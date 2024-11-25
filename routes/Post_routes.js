const express = require('express')
const router =express.Router();
const Post = require("../controllers/post_controller");  
router.get("/", Post.getAllPosts);

router.get("/:id", Post.getPostById);

router.post("/", (req, res) => {
    Post.createPost(req, res);
    });

module.exports = router;