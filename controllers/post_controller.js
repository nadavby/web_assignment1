const Post = require("../models/post_model");

const getAllPosts = async (req, res) => {
    try {

        const posts = await Post.find();
        res.send(posts);
      }
     catch (error) {
      res.status(400).send(error.message);
    }
  };

const getPostById = async (req, res) => {
    const idfilter = req.params.id;
    if(!idfilter){
        return res.status(400).send({ error: "Post ID is required" });
    }
    try{
        const Posts = await Post.findById(idfilter);
        if(!Posts){
            return res.status(404).send({ error: "Post not found" });
        }
        return res.status(200).send(Posts);
    } catch(err){
        return res.status(400).send(err.message);
    }
   };

   const createPost = async (req, res) => {
    try {
        const post = await Post.create(req.body);
        if(!post){
            return res.status(404).send({ error: "One of the fields is invalid" });
        }
        res.status(201).send(post);
    } catch(err) {
        res.status(400).send(err.message);
    }
    };   

    const getPostsBySender = async (req,res) => {
        const senderfilter = req.query.sender;
        try {
            if (senderfilter || senderfilter.trim() === "") 
                {
              const posts = await Post.find({ sender: senderfilter });
              return res.status(200).send(posts);
            } 
            else 
            {
                return res.status(500).send({ error: "Sender is required" });
            }
        } 
        catch (err)
        {
            return res.status(400).send(err.message);
        }
    };


    const updatePostById = async (req, res) => {
        const idfilter = req.params.id; 
        const updateData = req.body; 
        if (!idfilter) {
            return res.status(400).send({ error: "Post ID is required" });
        }
        try {
            const updatedPost = await Post.findByIdAndUpdate(idfilter, updateData, { new: true, runValidators: true });
            if (!updatedPost){
                return console.log("The Post ID is not valid");
            }
            return res.status(200).send(updatedPost);
        } catch (err) {
            return res.status(500).send(err.message);
        }
    };

module.exports = {getAllPosts, getPostById, createPost,getPostsBySender,updatePostById}; 

