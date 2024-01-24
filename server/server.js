// dummy database and get requests
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const port = 3000;
const app = express();
const uri = "mongodb://localhost:27017/dummy_data";
mongoose.connect(uri);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

const UserModel = mongoose.model(
  "users",
  new mongoose.Schema({ username: String, caption: String })
);

app.get("/", async (req, res) => {
  try {
    const documents = await UserModel.find();
    res.send(documents);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

process.on("SIGINT", () => {
  mongoose.connection.close(() => {
    console.log("MongoDB connection closed due to application termination");
    process.exit(0);
  });
});