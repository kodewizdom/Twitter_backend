const mongoose = require('mongoose');


const connect = async () =>{
    await mongoose.connect('mongodb://127.0.0.1:27017/twitter_Dev');

}

module.exports = connect;
// import mongoose from 'mongoose';

// export const connect = async () => {
//     await mongoose.connect('mongodb://localhost/twitter_Dev');
// }