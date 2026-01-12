import { FaUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";

const VideoDetails = () => {
  const { video, channel, loading } = useSelector((state) => state.watch);

  if (loading) return <p>Loading video details...</p>;
  if (!video || !channel) return null;

  const { snippet } = video;
  const { statistics } = channel;

  return (
    <>
      <h2 className="p-2 text-xl font-semibold">{snippet?.title}</h2>

      <div className="border-1 flex flex-wrap items-center justify-between gap-3 rounded-md border p-2">
        <div className="flex items-center gap-3 px-2 py-1">
          <FaUserCircle className="cursor-pointer text-3xl" />

          <h2 className="text-lg font-semibold">
            {snippet?.channelTitle}
          </h2>

          <span>|</span>

          <p className="text-md">
            {parseInt(statistics?.subscriberCount || 0).toLocaleString()} Subscribers
          </p>
        </div>

        <button className="rounded-md bg-purple-500 px-3 py-1 font-bold text-white">
          SUBSCRIBE
        </button>
      </div>
    </>
  );
};

export default VideoDetails;
