import { shortenUrl } from "../services/urlService";
import { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";

function Home() {
  const [url,setUrl]=useState("");
  const [shortUrl,setShortUrl]=useState("");
  async function handleShorten() {
  try {
    const data = await shortenUrl(url);

    
  } catch (error) {
    console.error(error);
  }
}

  return (
    <div className="max-w-md mx-auto mt-20 space-y-4">
      <h1 className="text-3xl font-bold">
        AI URL Shortener
      </h1>

      <Input
        placeholder="Paste your long URL..."
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />

      <Button onClick={handleShorten}>
        Shorten URL
      </Button>
    </div>
  );
}

export default Home;