import express from "express";
import 'dotenv/config'
import bodyParser from 'body-parser';
import mongoose from "mongoose";
import cors from "cors";
import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/users.js";
import PostMessage from "./models/postMessage.js";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use('/', postRoutes);
app.use('/username', userRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() =>
    app.listen(PORT, () => {
      console.log(`App listening on port ${PORT}`);
    })
  )
  .catch((err) => console.log(err.message));

process.on("SIGINT", () => {
  mongoose.connection.close(() => {
    console.log("MongoDB connection closed due to application termination");
    process.exit(0);
  });
});
