import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  user: String,
  content: String,
  image: String,
  likes: {
    type: [String],
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
    default: new Date().toDateString().slice(4),
  },
});

var PostMessage = mongoose.model("posts", postSchema);

export default PostMessage;