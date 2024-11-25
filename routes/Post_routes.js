const express = require('express')
const router =express.Router();
const Post = require("../controller/post_controller");  

router.get("/", Post.getAllPosts);

router.get("/:id", Post.getPostById);

module.exports = router;