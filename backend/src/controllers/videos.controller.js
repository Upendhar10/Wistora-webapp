import axios from "axios";
import { API_URL } from "../utils/constants.js";

export const getVideos = async (req, res) => {
  try {
    const { category } = req.query;

    const CATEGORY_IDS = {
      trending: "",
      music: "10",
      gaming: "20",
      sports: "17",
    };

    const categoryParam = CATEGORY_IDS[category]
      ? `&videoCategoryId=${CATEGORY_IDS[category]}`
      : "";

    const url = `${API_URL}&key=${process.env.YOUTUBE_API_KEY}${categoryParam}`
    const response = await axios.get(url);

    // console.log(response);

    res.json(response.data);

  } catch (error) {
    console.error("Video fetch failed:", error.message);
    res.status(500).json({ error: "Failed to fetch videos" });
  }
};
