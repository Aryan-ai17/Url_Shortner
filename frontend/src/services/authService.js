import axios from "axios";

export async function register(userData) {
  console.log("Sending:", userData);

  const response = await axios({
    method: "post",
    url: "http://localhost:3000/api/auth/register",
    data: userData,
    timeout: 5000,
  });

  console.log("Response:", response);

  return response.data;
}