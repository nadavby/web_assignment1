const Post = require("../models/post_model");

const getAllPosts = async (req,res) =>{
const filter = req.query;
console.log(filter);
try{
    if(filter.owner){
        const Posts = await Post.find({owner:filter.owner});
        return res.status(201).send(Posts);
    }
    else{
     const Posts = await Post.find();
    return res.status(200).send(Posts);
    }
}
catch(err){
    return res.status(400).send(err.message);
}};

const getPostById = async (req, res) => {
    const idfilter = req.params.id;
    try{
        const Posts = await Post.findById(idfilter);
        if(!Posts){
            return res.status(404).send({ error: "Post not found" });
        }
        return res.status(201).send(Posts);
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

module.exports = {getAllPosts, getPostById, createPost}; 