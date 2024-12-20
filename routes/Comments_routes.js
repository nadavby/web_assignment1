const express = require("express");
const router = express.Router();
const Comment = require("../controllers/comments_controller");

router.post("/", Comment.createComment);

router.get("/:id", Comment.getCommentById);

router.delete("/:id", Comment.deleteComment);

router.put("/:id", Comment.updateComment);

router.get("/post/:postId", Comment.getCommentsByPost);

module.exports = router;