import axios from "axios";

const KEY = "AIzaSyCy4L1XS-J9g6YVJx8GH39G4LQ7TsuYI6E";

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
