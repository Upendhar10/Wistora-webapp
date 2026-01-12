import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { searchVideos } from "../redux/thunks/searchThunk.js";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { ShimmerList } from "./Shimmer";

const SearchResult = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((store) => store.search);

  useEffect(() => {
    if (query) {
      dispatch(searchVideos(query));
    }
  }, [query, dispatch]);

  if (loading) return <ShimmerList />;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] [scrollbar-width:none] gap-3 p-2">
      {data.map((video) => (
        <Link
          to={`/watch?v=${video.id.videoId}`}
          key={video.id.videoId}
        >
          <VideoCard video={video} />
        </Link>
      ))}
    </div>
  );
};

export default SearchResult;
