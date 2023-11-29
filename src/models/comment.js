const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    userEmail:{
        type: String,
    }
},{timestamps:true});

const Comment = mongoose.model('Comment',commentSchema); //it will automatically make the comment plural i.e Comments

module.exports = Comment;