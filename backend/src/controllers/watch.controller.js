import axios from "axios";
import { WatchVideoAPI, ChannelAPI } from "../utils/constants.js";

export const getVideoDataById = async (req, res) => {
  try {
    const { v } = req.query;
    const {category} = req.query;

    if (!v) {
      return res.status(400).json({ error: "Video ID is required" });
    }

    // Fetch video data
    const videoUrl = `${WatchVideoAPI}&key=${process.env.YOUTUBE_API_KEY}&id=${v}`;
    const videoResponse = await axios.get(videoUrl);
    

    const videoItem = videoResponse?.data?.items?.[0];

    if (!videoItem) {
      return res.status(404).json({ error: "Video not found" });
    }

    const channelId = videoItem.snippet.channelId;

    // Fetch channel data
    const channelUrl = `${ChannelAPI}&key=${process.env.YOUTUBE_API_KEY}&id=${channelId}`;
    const channelResponse = await axios.get(channelUrl);

    const channelItem = channelResponse?.data?.items?.[0];

    // Normalized response
    return res.status(200).json({
      video: videoItem,
      channel: channelItem,
      category: category
    });

  } catch (error) {
    console.error("Watch fetch failed:", error.message);
    return res.status(500).json({ error: "Failed to fetch watch data" });
  }
};
