import axios from "axios";

const API_URL = "http://localhost:3000/api/url";

export async function shortenUrl(originalUrl) {
  try {
    const response = await axios.post(`${API_URL}/shorten`, {
      originalUrl,
    });

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}