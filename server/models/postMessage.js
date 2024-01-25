import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  likes: {
    type: [mongoose.Schema.Types.ObjectId], // Assuming likes are represented as user ObjectId references
    default: [],
  },
  comments: {
    type: [mongoose.Schema.Types.ObjectId], // Assuming comments are represented as comment ObjectId references
    default: [],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

var PostMessage = mongoose.model("Post", postSchema);

export default PostMessage;
