import { useEffect, useState } from "react";
import { getMyUrls } from "../services/urlService";

function Dashboard() {
  const [urls, setUrls] = useState([]);

  async function fetchUrls() {
    try {
      const data = await getMyUrls();

      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchUrls();
  }, []);

  return <h1>Dashboard</h1>;
}

export default Dashboard;