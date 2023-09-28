import express from 'express';
import {connect} from './config/database.js';
const app = express();

import {TweetRepository} from './repository/index.js';
import TweetService from './services/tweet-service.js';

// const {TweetRespository}= require('./repository/index');
// const TweetService= require('./services/tweet-service');

app.listen(3000, async () => {
    console.log("server started");
    await connect();
    console.log("Mongo db connected");
    // let service = new TweetService();
    // const tweet = service.create({
    //     content:'testing code #nolife'
    // });
    // console.log(tweet);
});
