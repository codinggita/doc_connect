import express from 'express';
import { getPosts, createPosts, editPost, deletePost } from '../controllers/posts.js';

const router = express.Router();

router.get('/', getPosts);
router.post('/posts', createPosts);
router.patch('/posts/:id', editPost);
router.delete('/posts/:id', deletePost);

export default router;