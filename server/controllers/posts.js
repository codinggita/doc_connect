import express from 'express';
import mongoose from 'mongoose';
import PostMessage from '../models/postMessage.js';

const router = express.Router(); 

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();
    console.log(postMessages);
    res.status(200).json(postMessages);
  } catch (error) {
    console.log(error);
    res.status(404).json({message: error.message});
  }
};

export const createPosts = async (req, res) => {
  const post = req.body;
  const newPost = new PostMessage(post);
  try {
    await newPost.save();
  } catch (error) {
    res.status(409).json({message: error.message});
  }
};

export const editPost = async (req, res) => {
  const {id = _id} = req.params;
  const post = req.body;

  if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that ID');

  const updatedPost = await PostMessage.findOneAndUpdate(_id, {...post, _id}, { new: true });
  res.json(updatedPost);
};

export const deletePost = async (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  console.log(id);
  const post = req.body;

  if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that ID');

  const deletedPost = await PostMessage.deleteOne(id);
  res.json(deletedPost);
};

export default router;