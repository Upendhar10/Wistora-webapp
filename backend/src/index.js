import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

// routes 
import videosRoute from "./routes/videos.route.js";
import SearchRoute from './routes/search.route.js';
import LiveVideosRoute from './routes/live.route.js';
import WatchPageRoute from './routes/watch.route.js';

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// endpoints
app.use("/api/videos", videosRoute);
app.use("/api/search", SearchRoute);
app.use("/api/live", LiveVideosRoute);
app.use("/api/watch", WatchPageRoute);

app.get("/", (req, res) => {
  res.send("BFF is running 🚀");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
