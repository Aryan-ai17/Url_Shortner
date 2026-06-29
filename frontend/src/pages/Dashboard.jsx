import { useEffect, useState } from "react";
import { getMyUrls } from "../services/urlService";

function Dashboard() {
  const [urls, setUrls] = useState([]);

  async function fetchUrls() {
    try {
      const data = await getMyUrls();
      setUrls(data.urls);

      console.log(data.urls);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchUrls();
  }, []);

  return (
  <div>
    <h1>Dashboard</h1>

    {urls.map((url) => (
      <div key={url._id}
      className="border rounded-lg p-4 shadow mb-4"
      >
        <p>Original URl: {url.originalUrl}
        </p>
        <p>
  Short URL:{" "}
  <a
    href={url.shortUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-600 underline"
  >
    {url.shortUrl}
  </a>
</p>
        <p>Clicks: {url.clicks}</p>

      </div>
    ))}
  </div>
);
}

export default Dashboard;