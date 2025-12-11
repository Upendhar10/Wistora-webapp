import { formatDistanceToNow } from "date-fns"; // To format time difference

const VideoCard = ({ video }) => {
  const { snippet, statistics } = video;
  const { title, channelTitle, thumbnails, publishedAt } = snippet;

  return (
    <div className="border-1 h-[260px] min-w-[250px] cursor-pointer rounded-md border italic">
      <img
        src={thumbnails?.medium?.url}
        alt={title}
        className="h-3/5 w-full rounded-t-md"
      />
      <div>
        <h2 className="line-clamp-2 p-1 font-bold">{title}</h2>
        <h3 className="px-1 text-sm font-semibold opacity-80">
          {channelTitle}
        </h3>
        <div className="flex gap-2 p-1 text-xs opacity-75">
          {statistics?.viewCount ? (
            <>
              <span>
                {parseInt(statistics?.viewCount)?.toLocaleString()} Views
              </span>
              <span>|</span>
            </>
          ) : null}
          <span>{formatDistanceToNow(new Date(publishedAt))} ago</span>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;

/*
const VideoCard = () => {
  return (
    <div className="h-[250px] min-w-[220px] rounded-md bg-red-500">
      <img src="" alt="thumbnail" className="h-3/5 rounded-t-md bg-green-500" />
      <div className="p-2">
        <h2 className="p-1 font-bold">title</h2>
        <h3 className="font-semibold">Channel Name</h3>
        <div className="flex gap-2">
          <span>100000 Views</span>
          <span>|</span>
          <span>2hr ago</span>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;


*/
