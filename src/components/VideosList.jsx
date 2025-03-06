import { useState, useEffect } from "react";
import VideoCard from "./VideoCard";
import { YT_VIDEOS_API, YT_LIVE_API } from "../utils/constants";
import { Link } from "react-router-dom";

const CATEGORY_IDS = {
  trending: "",
  music: "10",
  gaming: "20",
  sports: "17",
};

const VideosList = ({ category }) => {
  const [videos, setVideos] = useState([]);
  const currCategory = category;
  useEffect(() => {
    const fetchVideos = async () => {
      let API_URL = "";

      if (category === "live") {
        API_URL = YT_LIVE_API;
      } else {
        const CATEGORY_ID = CATEGORY_IDS[category]
          ? `&videoCategoryId=${CATEGORY_IDS[category]}`
          : "";
        API_URL = YT_VIDEOS_API + CATEGORY_ID;
      }

      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        const data = await response.json();
        setVideos(data.items || []);
      } catch (error) {
        console.error("Unable to Fetch Data", error);
      }
    };

    fetchVideos();
  }, [category]);

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-3 p-2">
      {videos.map((video) => (
        <Link
          to={`/watch?v=${video.id?.videoId || video.id}&category=${currCategory}`}
          key={video.id?.videoId || video.id}
        >
          <VideoCard video={video} category={currCategory} />
        </Link>
      ))}
    </div>
  );
};

export default VideosList;
