import { useSearchParams } from "react-router-dom";
import VideoDetails from "../components/VideoDetails";
import LiveChat from "../components/LiveChat";
// import CommentsCont from "../components/CommentsCont";

function Watch() {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
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
        <VideoDetails videoId={videoId} />
      </div>
      <LiveChat />
      {/* <CommentsCont /> */}
    </div>
  );
}

export default Watch;
