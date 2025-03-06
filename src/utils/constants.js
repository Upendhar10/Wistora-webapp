export const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;

export const YT_VIDEOS_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=20&key=${GOOGLE_API_KEY}&regionCode=IN`;

export const YT_LIVE_API = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&regionCode=IN&maxResults=20&key=${GOOGLE_API_KEY}&regionCode=IN&type=video&eventType=live`;

export const YT_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YT_SEARCH_VIDEO_API = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&regionCode=IN&maxResults=20&key=${GOOGLE_API_KEY}&q=`;

// https://www.youtube.com/results?search_query=mr+beast
