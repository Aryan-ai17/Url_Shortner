# URL Shortener Backend

A URL Shortener backend built using Node.js, Express.js, and MongoDB. Users can shorten long URLs, redirect using short links, and track click analytics.

## Features

- Shorten long URLs
- Redirect short URLs to original URLs
- Click analytics tracking
- URL statistics API
- Duplicate URL prevention
- Error handling with try/catch

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- NanoID

## API Endpoints

### Create Short URL

POST `/api/url/shorten`

Request:

```json
{
  "originalUrl": "https://google.com"
}
```

### Get URL Stats

GET `/api/url/stats/:shortCode`

### Redirect URL

GET `/:shortCode`

## Setup

```bash
npm install
npm run dev
```

Create `.env` file:

```env
MONGO_URI=your_mongodb_url
BASE_URL=http://localhost:3000
```
