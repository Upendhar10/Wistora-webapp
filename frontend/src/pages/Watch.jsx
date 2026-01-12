import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWatchVideoData } from "../redux/thunks/watchVideoThunk.js";

import { useSearchParams } from "react-router-dom";
import VideoDetails from "../components/VideoDetails";
import LiveChat from "../components/LiveChat";
import CommentsCont from "../components/CommentsCont";

function Watch() {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  const dispatch = useDispatch();
  const { video, channel, category, loading, error } = useSelector((state) => state.watch);

  useEffect(() => {
    if (videoId) {
      dispatch(fetchWatchVideoData(videoId));
    }
  }, [videoId, dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!video || !channel) return null;

  return (
    <div className="flex w-full flex-col gap-3 p-2 md:flex-row">
      <div className="w-full md:w-2/3">
        <iframe
          width="100%"
          height="410"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <VideoDetails/>
      </div>
      {category !== "live" ? <CommentsCont /> : <LiveChat />}
    </div>
  );
}

export default Watch;