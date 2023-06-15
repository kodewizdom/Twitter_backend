const mongoose = require('mongoose');

const hashtagSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    // here i am maintaining tweets inside array and i am going to store tweet id in it.
    tweets: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Tweet'
        }
    ]
}, { timestamps: true });