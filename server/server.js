// dummy database and get requests
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;
const app = express();
const uri = "mongodb://localhost:27017/doc_connect";

require(dotenv).config();

mongoose
  .connect(uri)
  .then(() =>
    app.listen(PORT, () => {
      console.log(`App listening on port ${port}`);
    })
  )
  .catch((err) => console.log(err.message));

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

process.on("SIGINT", () => {
  mongoose.connection.close(() => {
    console.log("MongoDB connection closed due to application termination");
    process.exit(0);
  });
});
