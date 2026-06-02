# URL Shortener Backend

A production-ready URL Shortener backend built using **Node.js, Express.js, and MongoDB**. Users can shorten URLs, manage their own links, track analytics, and securely authenticate using JWT.

## Live API

Deployed Backend: https://url-shortner-n8i7.onrender.com

## Features

### URL Management

* Shorten long URLs
* Redirect short URLs to original URLs
* QR code generation for shortened URLs
* Click analytics tracking
* URL statistics API
* Duplicate URL prevention

### Authentication & Authorization

* User Registration
* User Login
* JWT Authentication
* Password hashing using bcrypt
* Protected routes using middleware
* Ownership-based access control (users can only manage their own URLs)

### CRUD Operations

* Create Short URL
* Get User URLs
* Update URL
* Delete URL

### Security

* API rate limiting to prevent abuse and brute-force attacks
* Error handling using try/catch

## Tech Stack

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* JWT (jsonwebtoken)
* bcrypt
* NanoID
* express-rate-limit
* QRCode
* Render (Deployment)

## API Endpoints

### Authentication

#### Register User

POST `/api/auth/register`

#### Login User

POST `/api/auth/login`

Request:

```json
{
  "email": "test@example.com",
  "password": "password123"
}
```

---

### URL APIs

#### Create Short URL

POST `/api/url/shorten`

#### Get My URLs

GET `/api/url/my-urls`

#### Get URL Stats

GET `/api/url/stats/:shortCode`

#### Update URL

PATCH `/api/url/:shortCode`

Request:

```json
{
  "originalUrl": "https://google.com"
}
```

#### Delete URL

DELETE `/api/url/:shortCode`

#### Redirect URL

GET `/:shortCode`

## Setup

```bash
npm install
npm run dev
```

Create a `.env` file:

```env
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
BASE_URL=http://localhost:3000
```

## Future Improvements

* Forgot Password Feature
* Swagger API Documentation
* Custom URL Alias
* Link Expiration
