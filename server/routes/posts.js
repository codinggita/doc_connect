import express from "express";
import {
  getPosts,
  searchPosts,
  likePost,
  createPosts,
  editPost,
  deletePost,
} from "../controllers/posts.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", getPosts);
router.get("/search?hashtag=:hashtag", searchPosts);
router.patch("/:id/likePost", likePost);
router.post("/create", createPosts);
router.put("/:id/edit", editPost);
router.delete("/:id/delete", deletePost);

export default router;
