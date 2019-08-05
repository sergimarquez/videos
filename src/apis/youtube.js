import axios from "axios";

const KEY = "AIzaSyDQVL2QsiTUH1X-Yf7Gs6p2BArV9j67Z_k";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
