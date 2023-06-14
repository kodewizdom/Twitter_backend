const express = require("express");
const connect = require('./config/database');
const app = express();

const TweetRepository = require('./repository/tweet-repository');
const Comment = require('./models/comment')

app.listen(3000, async () => {
    console.log("server started");
    await connect();
    console.log("Mongo db connected");

    const tweetRepo = new TweetRepository();
    // const tweet = await tweetRepo.create({ content: 'Tweet with comment schema' });
    // console.log(tweet);
    // const comment = await Comment.create({ content: 'new comment' });
    // tweet.comments.push(comment);
    // await tweet.save();

    const tweet = await tweetRepo.getWithComments('6489cc473f5ea80f8092ab17');
    console.log(tweet);

});
