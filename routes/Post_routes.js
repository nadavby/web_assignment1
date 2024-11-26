const express = require('express')
const router =express.Router();
const Post = require("../controllers/post_controller");  

router.get("/", (req, res) => {
    if (req.query.owner) {
        return Post.getPostsByOwner(req, res); 
    } else {
        return Post.getAllPosts(req, res); 
    }
});

router.get("/:id", Post.getPostById);

router.post("/", (req, res) => {
    Post.createPost(req, res);
    });

router.put("/:id", Post.updatePostById);    

module.exports = router;