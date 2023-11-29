const mongoose = require('mongoose');

const tweetSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    userEmail:{
        type: String,
    },
    comments:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Comment'
        }
    ]
},{timestamps:true});

const Tweet = mongoose.model('Tweet',tweetSchema); //it will automatically make the tweet plural i.e Tweets

module.exports = Tweet;