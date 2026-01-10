import axios from "axios";
import { WatchVideoAPI } from "../utils/constants.js";

export const getVideoById = async (req, res) => {
  try {
    const { v } = req.query;

    if (!v) {
      return res.status(400).json({ error: "Video ID is required" });
    }

    const url = `${WatchVideoAPI}&key=${process.env.YOUTUBE_API_KEY}&id=${v}`;

    const response = await axios.get(url);

    res.json(response.data);
  } catch (error) {
    console.error("Watch fetch failed:", error.message);
    res.status(500).json({ error: "Failed to fetch video" });
  }
};
