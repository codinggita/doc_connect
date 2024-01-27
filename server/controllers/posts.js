import express from "express";
import mongoose from "mongoose";
import PostMessage from "../models/postMessage.js";
import { ObjectId } from "mongodb";

const router = express.Router();

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();
    console.log(postMessages);
    res.status(200).json(postMessages);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
};

export const searchPosts = async (req, res) => {
  const { hashtag } = req.params;

  try {
    const searchMessages = await PostMessage.find({ hashtags: hashtag });
    console.log(searchMessages);
    res.status(200).json(searchMessages);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
};

export const getPostLikes = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await PostMessage.findById(id);
    if (!post) {
      res.status(200).json(null);
    }
    res.status(200).json(post.likes);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const createPosts = async (req, res) => {
  const post = req.body;
  console.log(post);
  const newPost = new PostMessage(post);
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    console.error(error);
    res.status(409).json({ message: error.message });
  }
};

export const editPost = async (req, res) => {
  const { id } = req.params;
  const { title, message, creator, selectedFile, tags } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("Invalid post ID");
  }

  try {
    const updatedPost = {
      creator,
      title,
      message,
      tags,
      selectedFile,
      _id: id,
    };

    await PostMessage.findByIdAndUpdate(
      id,
      updatedPost, // Use the request body to update the post
      { new: true } // Return the updated post
    );

    if (!updatedPost) {
      return res.status(404).json({ message: "No post found with that ID" });
    }

    res.status(200).json(updatedPost);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const deletePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No post with that ID");

  try {
    const deletedPost = await PostMessage.findByIdAndDelete(id);
    if (!deletedPost) {
      return res.status(404).json({ message: "No post found with that ID" });
    }
    res.json(deletedPost);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export default router;
