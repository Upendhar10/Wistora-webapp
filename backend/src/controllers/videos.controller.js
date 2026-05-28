import axios from "axios";
import { API_URL } from "../utils/constants.js";

export const getVideos = async (req, res) => {
  console.log("Request started");

  try {
    const { category='trending' } = req.query;

    const CATEGORY_IDS = {
      trending: null,
      music: "10",
      gaming: "20",
      sports: "17",
    };

    if (!(category in CATEGORY_IDS)) {
      return res.status(400).json({
          error:"Invalid category"
      });
    }

    const params = {
      key:process.env.YOUTUBE_API_KEY
    };

    if(CATEGORY_IDS[category]){
      params.videoCategoryId =
      CATEGORY_IDS[category];
    }

    console.log(API_URL, params);

    console.log("Calling upstream API");
    
    const response = await axios.get(API_URL, {
        params,
        timeout:10000
      }
    );

    // console.log(response);

    console.log("Upstream responded");

    return res.json(response.data);

  } catch (error) {
    console.error({
      message:error.message,
      code:error.code,
      status:error.response?.status,
      data:error.response?.data
    });
    if(error.code==="ECONNABORTED"){
      return res.status(504).json({
         error:"YT request timeout"
      });
    }
    res.status(500).json({ error: error.message });
  }
};
