import express from 'express';

import { createTweet} from '../../controllers/tweet-controller.js';


const router = express.Router();

router.post('/tweets', createTweet);

export default router;

/**
 * 
 * user -> unique_id -
 * 
 * https://www.mywebsite.com/verifyEmail/skhvbv8w874rte4t
 * 
 * verifyEmail/:unique_id -> decrypttoken (unique_id) -> {id: wi4uy, email: w8ery}
 * 
 * db -> userid -> unique_id -> createdAt -> isVerified
 */