const Comment = require("../models/comments_model.js");

const createComment = async (req, res) => {
    try {
        const { postId, content, author } = req.body;
        if (!postId || !content || !author) {
            return res.status(400).json({ error: "postId, content, and author are required" });
        }
        const newComment = await Comment.create({ postId: postId,content: content,author: author });
        return res.status(201).json(newComment);
    } catch (err) {
        return res.status(500).json({ error: "postId is not valid" });
    }
};

module.exports = {createComment};