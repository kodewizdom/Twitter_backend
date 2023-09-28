//to connect database
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();


export const connect = async () => {
    // await mongoose.connect('mongodb://127.0.0.1:27017/twitter_Dev');
    await mongoose.connect(process.env.MONGO_DB);
} 


