import axios from "axios";
const API_URL = "http://localhost:3000/api/auth";

export async function register(userData) {
  console.log("Sending:", userData);

  const response = await axios({
    method: "post",
    url: `${API_URL}/register`,
    data: userData,
    timeout: 5000,
  });

  console.log("Response:", response);

  return response.data;
}
export async function login(userData) {
  console.log("Sending:", userData);

  const response = await axios({
    method: "post",
    url: `${API_URL}/login`,
    data: userData,
    timeout: 5000,
  });

  console.log("Response:", response);

  return response.data;

}