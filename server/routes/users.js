import express from 'express';
import { getUser, getUserPost } from '../controllers/users.js';


const router = express.Router();

router.get('/', getUser);
router.get('/:post_id', getUserPost);

export default router;