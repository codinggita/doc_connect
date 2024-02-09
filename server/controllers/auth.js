import "dotenv/config";
import { StreamChat } from "stream-chat";
import bcrypt from "bcryptjs";
import UserModel from "../models/userModel.js";

const api_key = process.env.STREAM_APP_KEY;
const api_secret = process.env.STREAM_APP_SECRET;
const app_id = process.env.STREAM_APP_ID;
const secretKey = process.env.JWT_TOKEN;

export const signin = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (username == "" || password == "") {
      res.status(400).json({ message: "Invalid credentials" });
    }

    const existingUser = await UserModel.findOne({ username: username });
    console.log(existingUser);

    if (!existingUser) {
      return res.status(404).json({ message: "User doesn't exist." });
    }
    // const serverClient = StreamChat.getInstance(api_key, api_secret);

    // const tkn = existingUser._id.toString();
    // const streamToken = serverClient.createToken(tkn);

    const isCorrect = await bcrypt.compare(password, existingUser.password);

    if (!isCorrect) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const accessToken = existingUser.generateAccessToken(secretKey);

    const responseObj = {
      userObj: existingUser,
      token: accessToken,
    }

    res.status(200).json(responseObj);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const signup = async (req, res) => {
  const { username, name, email, password, confirmPassword } = req.body;

  try {
    const existingUser = await UserModel.find({ username: username });

    if (existingUser.length > 0) {
      return res.status(400).json({ message: "User already exist." });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords don't match." });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = await UserModel.create({
      username,
      name,
      email,
      password: hashedPassword,
    });
    console.log(newUser);

    const accessToken = newUser.generateAccessToken(secretKey);

    console.log(accessToken);

    // const serverClient = StreamChat.getInstance(api_key, api_secret);

    // const tkn = newUser._id.toString();
    // const streamToken = serverClient.createToken(tkn);

    const responseObj = {
      userObj: newUser,
      token: accessToken,
    }

    res.status(200).json(responseObj);
  } catch (error) {
    res.status(500).json(error);
  }
};
