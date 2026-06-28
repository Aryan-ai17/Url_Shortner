import axios from "axios";

const API_URL = "http://localhost:3000/api/url";

export async function shortenUrl(originalUrl) {
  try {
    const token= localStorage.getItem("token");
    const response = await axios.post(`${API_URL}/shorten`, {
      originalUrl,
    },
  {
    headers:{
      Authorization: `Bearer ${token}`,
    },
  });

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
export async function getMyUrls() {
  try {
    const token = localStorage.getItem("token");

    const response = await axios.get(
      `${API_URL}/my-urls`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}