export const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;

export const YT_VIDEOS_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=20&key=${GOOGLE_API_KEY}&regionCode=IN`;

export const YT_LIVE_API = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&regionCode=IN&maxResults=20&key=${GOOGLE_API_KEY}&regionCode=IN&type=video&eventType=live`;
