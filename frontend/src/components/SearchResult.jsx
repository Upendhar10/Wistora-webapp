import { useState, useEffect } from "react";
import VideoCard from "./VideoCard";
import { YT_SEARCH_VIDEO_API } from "../utils/constants";
import { Link, useSearchParams } from "react-router-dom";

const SearchResult = () => {
  const [videos, setVideos] = useState([]);

  const [searchParams] = useSearchParams();

  const SearchQuery = searchParams.get("q");

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(YT_SEARCH_VIDEO_API + SearchQuery);
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        const data = await response.json();
        console.log(data);

        setVideos(data.items || []);
      } catch (error) {
        console.error("Unable to Fetch Data", error);
      }
    };

    fetchVideos();
  }, [SearchQuery]);

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-3 p-2 overflow-y-scroll [scrollbar-width:none] [-ms-overflow-style:none] hide-scrollbar">
      {videos.map((video) => (
        <Link
          to={`/watch?v=${video.id?.videoId || video.id}`}
          key={video.id?.videoId || video.id}
        >
          <VideoCard video={video} />
        </Link>
      ))}
    </div>
  );
};

export default SearchResult;
