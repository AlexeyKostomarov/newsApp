import axios from "axios";

const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;
const API_KEY = import.meta.env.VITE_NEWS_APY_KEY;

export const getNews = async () => {
  try {
    const response = await axios.get(`${BASE_URL}latest-news`, {
      params: {
        apiKey: API_KEY,
      },
    });
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
