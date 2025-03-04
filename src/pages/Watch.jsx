import { useSearchParams } from "react-router-dom";
import VideoDetails from "../components/VideoDetails";

function Watch() {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  return (
    <div className="p-2 md:w-2/3">
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
  );
}

export default Watch;
