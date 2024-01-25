import express from "express";
import 'dotenv/config'
import bodyParser from 'body-parser';
import mongoose from "mongoose";
import cors from "cors";
import postRoutes from "./routes/posts.js";

const PORT = process.env.PORT || 3000;
const app = express();
const uri = "mongodb://localhost:27017/doc_connect";

app.use(cors());
app.use('/', postRoutes);

mongoose
  .connect(uri)
  .then(() =>
    app.listen(PORT, () => {
      console.log(`App listening on port ${PORT}`);
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
