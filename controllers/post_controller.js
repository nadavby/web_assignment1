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

module.exports = {getAllPosts}; 