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
const getCommentById = async (req, res) => {
    const { id } = req.params;

    try {
        const comment = await Comment.findById(id);
        if (!comment) {
            return res.status(404).send({ error: "Comment not found" });
        }
        return res.status(200).send(comment);
    } catch (err) {
        return res.status(500).send({ error: err.message });
    }
};
const updateComment = async (req, res) => {
    const { id } = req.params;
    const { content } = req.body;

    try {
        const updatedComment = await Comment.findByIdAndUpdate(
            id,
            { content },
            { new: true, runValidators: true }
        );
        if (!updatedComment) {
            return res.status(404).send({ error: "Comment not found" });
        }
        return res.status(200).send(updatedComment);
    } catch (err) {
        return res.status(500).send({ error: err.message });
    }
};

module.exports = {createComment,getCommentById,updateComment};