import axios from "axios";
import { YT_LIVE_API } from "../utils/constants.js";

export const getLiveVideos = async (req, res) => {
  try {
    const url = `${YT_LIVE_API}&key=${process.env.YOUTUBE_API_KEY}`

    const response = await axios.get(url);

    res.json(response.data);
  } catch (error) {
    console.error("Live fetch failed:", error.message);
    res.status(500).json({ error: "Failed to fetch live videos" });
  }
};
