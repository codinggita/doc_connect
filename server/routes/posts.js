import express from 'express';
import { getPosts, searchPosts, getPostLikes, likePost, createPosts, editPost, deletePost } from '../controllers/posts.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', getPosts);
router.get('/posts/?search=:hashtag', searchPosts);
router.get('/posts/:id/likes', getPostLikes);
router.post('/posts/:id/likePost', auth, likePost);
router.post('/posts', auth, createPosts);
router.patch('/posts/:id', auth, editPost);
router.delete('/posts/:id', auth, deletePost);

export default router;