const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const postSchema = new Schema ({
    title: {
    type: String,
    required: true
    },
    content: String,
    sender: {
    type: String,
    required: true    
    },
})
const Posts = mongoose.model("Posts", postSchema);
module.exports = Posts