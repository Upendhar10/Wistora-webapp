import axios from "axios";
import { Search_API_URL } from "../utils/constants.js";

export const getSearchVideos = async (req, res) => {
  try {
    const { q } = req.query;

    if (!q) {
      return res.status(400).json({ error: "Query is required" });
    }

    const search_api_url = `${Search_API_URL}&key=${process.env.YOUTUBE_API_KEY}&q=${q}`

    const response = await axios.get(search_api_url);
    res.json(response.data);

  } catch (error) {
    console.error("Search failed:", error.message);
    res.status(500).json({ error: "Failed to search videos" });
  }
};
