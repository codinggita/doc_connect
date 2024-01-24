import mongoose from "mongoose";

const UserModel = mongoose.model(
  "users",
  new Schema({
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
    },
    name: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+\@.+\..+/, "Please fill a valid email address"],
    },
    password: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
      maxLength: 200,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  })
);

export default UserModel;