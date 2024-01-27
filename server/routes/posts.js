import express from 'express';
import { getPosts, searchPosts, getPostLikes, createPosts, editPost, deletePost } from '../controllers/posts.js';

const router = express.Router();

router.get('/', getPosts);
router.get('/posts/?search=:hashtag', searchPosts);
router.get('/posts/:id/likes', getPostLikes);
router.post('/posts', createPosts);
router.patch('/posts/:id', editPost);
router.delete('/posts/:id', deletePost);

export default router;