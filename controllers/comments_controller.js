const Comment = require("../models/comments_model.js");

const createComment = async (req, res) => {
    try {
       
        const { postId, content, author } = req.body;
        if (!postId || !content || !author) {
            return res.status(400).send({ error: "postId, content, and author are required" });
        }
        const newComment = await Comment.create({ postId: postId,content: content,author: author });
        return res.status(201).send(newComment);
    } catch (err) {
    return res.status(500).send( err.message );
    }
};
const getCommentById = async (req, res) => {
    const  filterid  = req.params.id;

    try {
        const com = await Comment.findById(filterid);
        if (!com) {
            return res.status(404).send({ error: "Comment not found" });
        }
        return res.status(200).send(com);
    } catch (err) {
        return res.status(500).send({ error: err.message });
    }
};
const updateComment = async (req, res) => {
    const { id } = req.params;
    const { content } = req.body;

    try {
        const updatedComment = await Comment.findByIdAndUpdate(id, { content },{ new: true, runValidators: true });
        if (!updatedComment) {
            return res.status(404).send({ error: "Comment not found" });
        }
        return res.status(200).send(updatedComment);
    } catch (err) {
        return res.status(500).send({ error: err.message });
    }
};

const deleteComment = async (req, res) => {
    const  filterid  = req.params.id;

    try {
        const deletedComment = await Comment.findByIdAndDelete(filterid);
        if (!deletedComment) {
            return res.status(404).send({ error: "Comment not found" });
        }
        return res.status(200).send({ message: "Comment deleted successfully" });
    } catch (err) {
        return res.status(500).send({ error: err.message });
    }
};

const getCommentsByPost = async (req, res) => {
    const  postId  = req.params.id;
    
    try {
        const comments = await Comment.find( postId );
        return res.status(200).send(comments);
    } catch (err) {
        return res.status(500).send({ error: err.message });
    }
};

module.exports = {createComment,getCommentById,updateComment,deleteComment, getCommentsByPost};
