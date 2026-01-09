import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import VideoCard from "./VideoCard";
import { YT_VIDEOS_API } from "../utils/constants";
import { ShimmerList } from "./Shimmer";

const TrendingPreview = () => {
  const [videos, setVideos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTrendingVideos = async () => {
      try {
        const response = await fetch(YT_VIDEOS_API);
        if (!response.ok) {
          throw new Error("Failed to fetch trending videos");
        }
        const data = await response.json();
        setVideos(data.items || []);
      } catch (error) {
        console.error("Error fetching trending preview:", error);
      }
    };

    fetchTrendingVideos();
  }, []);

  if (videos.length === 0) {
    return <ShimmerList />;
  }

  const previewVideos = videos.slice(0, 8);

  return (
    <section className="w-full px-6 py-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Trending Now</h2>
        <button
          onClick={() => navigate("/trending")}
          className="text-sm text-purple-500 hover:underline"
        >
          View all →
        </button>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-3">
        {previewVideos.map((video) => (
          <Link
            to={`/watch?v=${video.id}`}
            key={video.id}
          >
            <VideoCard video={video} category="trending" />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default TrendingPreview;
