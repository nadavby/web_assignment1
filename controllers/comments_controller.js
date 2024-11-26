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

module.exports = {createComment,getCommentById};