import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideos } from "../redux/thunks/videosThunk.js";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { ShimmerList } from "./Shimmer";

const VideosList = ({ category }) => {
  
  const dispatch = useDispatch();
  const { data: videos, loading, error } = useSelector(
    (store) => store.videos
  );

  useEffect(() => {
    dispatch(fetchVideos(category));
  }, [category, dispatch]);

  if (loading) return <ShimmerList />;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-3 p-2 overflow-y-scroll hide-scrollbar">
      {videos.map((video) => (
        <Link
          to={`/watch?v=${video.id?.videoId || video.id}&category=${category}`}
          key={video.id?.videoId || video.id}
        >
          <VideoCard video={video} category={category} />
        </Link>
      ))}
    </div>
  );
};

export default VideosList;
