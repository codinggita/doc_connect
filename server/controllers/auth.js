import connect from "getstream";
import { StreamChat } from "stream-chat";
import bcrypt from "bcryptjs";
import UserModel from "../models/userModel.js";

const api_key = process.env.STREAM_APP_KEY;
const api_secret = process.env.STREAM_APP_SECRET;
const api_id = process.env.STREAM_APP_ID;

export const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await UserModel.findOne();
    if (!existingUser) {
      return res.status(404).json({ message: "User doesn't exist." });
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Invalid credentials." });
    }

    const serverClient = connect(api_key, api_secret, api_id);

    const streamToken = serverClient.createUserToken(existingUser._id);

    const jwttoken = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      process.env.JWT_TOKEN,
      { expiresIn: "1h" }
    );

    res
      .status(200)
      .json({ result: existingUser, jwt: jwttoken, stream: streamToken });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const signup = async (req, res) => {
  const { username, name, email, password, confirmPassword } = req.params;

  try {
    const existingUser = await UserModel.findOne();

    if (existingUser) {
      return res.status(400).json({ message: "User already exist." });
    }

    if (password === confirmPassword) {
      return res.status(400).json({ message: "Passwords don't match." });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = await UserModel.create({
      username,
      name,
      email,
      password: hashedPassword,
      bio,
    });

    const jwttoken = jwt.sign(
      { email: newUser.email, id: newUser._id },
      process.env.JWT_TOKEN,
      { expiresIn: "1h" }
    );

    const serverClient = connect(api_key, api_secret, api_id);

    const streamToken = serverClient.createUserToken(newUser._id);

    res.status(200).json({ result, jwt: jwttoken, stream: streamToken });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
