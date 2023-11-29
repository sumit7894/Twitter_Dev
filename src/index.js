const express = require('express');
const connect = require('./config/database');
const app = express();

const TweetRepository = require('./repository/tweet-repository');
const Comment = require('./models/comment');

app.listen(3000,async ()=>{
    console.log('Server started at 3000');
    await connect();
    // console.log('Mongo db connected');
    // const tweet = await Tweet.create({
    //     content: "Another Tweet",
    //     userEmail:"a@gmail.com"
    // })
    // console.log(tweet);
    const tweetRepo = new TweetRepository();
    const tweet = await tweetRepo.getWithComment('6566e085b0424edeaa280d72');
    console.log(tweet);
})