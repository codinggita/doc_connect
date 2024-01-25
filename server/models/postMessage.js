import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  user: {
    type: String,
    // required: true,
  },
  content: {
    type: String,
    // required: true,
  },
  image: {
    type: String,
  },
  likes: {
    type: [String], // Array of strings representing usernames
    default: [],
  },
  comments: {
    type: [
      {
        user: String,
        text: String,
      },
    ],
    default: [],
  },
  hashtags: {
    type: [String],
    default: [],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

var PostMessage = mongoose.model("posts", postSchema);

export default PostMessage;