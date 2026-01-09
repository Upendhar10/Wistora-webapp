import { FaUserCircle } from "react-icons/fa";
import { useState, useEffect } from "react";

import { channelResLink, VideResLink } from "../utils/constants";
const VideoDetails = ({ videoId }) => {
  const [videoData, setVideoData] = useState({});
  const [channelData, setChannelData] = useState({});

  useEffect(() => {
    const fetchVideoData = async () => {
      try {
        const videoRes = await fetch(VideResLink + videoId);
        if (!videoRes.ok) {
          throw new Error("Something went wrong", videoRes.statusText);
        }
        const data = await videoRes.json();

        const vData = data.items[0];

        // console.log(vData);

        if (!vData) return;
        setVideoData(data.items[0]);

        // Fetch Channel Data

        const channelRes = await fetch(
          channelResLink + `${vData.snippet.channelId}`,
        );
        if (!channelRes.ok) {
          throw new Error("Something went wrong", channelRes.statusText);
        }
        const cData = await channelRes.json();
        // console.log(cData);

        setChannelData(cData.items[0]);
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };
    if (videoId) fetchVideoData();
  }, [videoId]);

  if (!videoData || !channelData) return <div>Loading...</div>;

  const { snippet } = videoData;
  const { statistics } = channelData;

  return (
    <>
      <h2 className="p-2 text-xl font-semibold">{snippet?.title}</h2>
      <div className="border-1 flex flex-wrap items-center justify-between gap-3 rounded-md border p-2">
        <div className="flex items-center gap-3 px-2 py-1">
          <FaUserCircle className="cursor-pointer text-3xl" />
          <h2 className="text-lg font-semibold">{snippet?.channelTitle}</h2>
          <span>|</span>
          <p className="text-md">
            {parseInt(statistics?.subscriberCount)?.toLocaleString()}{" "}
            Subscribers
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
