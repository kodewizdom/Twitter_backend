import mongoose from 'mongoose';

const hashtagSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
        unique: true
    },
    // here i am maintaining tweets inside array and i am going to store tweet id in it.
    tweets: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Tweet'
        }
    ]
}, { timestamps: true });

const Hashtag = mongoose.model('Hashtag', hashtagSchema);
export default Hashtag;
