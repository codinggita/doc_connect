import mongoose from "mongoose";
import jwt from "jsonwebtoken";

const UserSchema = new mongoose.Schema({
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
    default: Date.now(),
  },
});

UserSchema.methods.generateAccessToken = function (secretKey) {
  try {
    const token = jwt.sign(
      { id: this._id },
      secretKey,
      { expiresIn: "30d" }
    );
      return token;
  } catch (err) {
      console.log(`Error creating JWT token`, err);
      process.exit(1);
  }
};

var UserModel = mongoose.model("users", UserSchema);

export default UserModel;
