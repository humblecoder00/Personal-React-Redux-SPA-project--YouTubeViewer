import axios from "axios";

const KEY = process.env.YOUTUBE_API_KEY;

export async function getYoutubeData(term) {
  const response = await axios.get("/search", {
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
      part: "snippet",
      type: "video",
      maxResults: 5,
      key: KEY,
      q: term
    }
  });
  return response;
}
