# AI URL Shortener SaaS

A full-stack URL Shortener SaaS built with **React, Node.js, Express.js, and MongoDB**. Users can securely create, manage, and analyze shortened URLs through a modern dashboard. The application includes authentication, analytics, QR code generation, and is designed to be extended with AI-powered features.

> **Project Status:** 🚧 Frontend currently under development.

---

# Live Demo

## Backend API

https://url-shortner-n8i7.onrender.com

## Frontend

Coming Soon

---

# Features

## Authentication

* User Registration
* User Login
* JWT Authentication
* Password hashing with bcrypt
* Protected Routes
* User-specific URL management

---

## URL Management

* Create Short URLs
* Redirect Short URLs
* Update URLs
* Delete URLs
* View all user URLs
* Duplicate URL prevention

---

## Analytics

* Click Tracking
* URL Statistics
* QR Code Generation

---

## Security

* JWT Authentication
* Password Hashing
* API Rate Limiting
* Ownership-based Authorization
* Error Handling

---

# Tech Stack

## Frontend

* React
* React Router
* Vite

## Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* JWT
* bcrypt
* NanoID
* QRCode
* express-rate-limit

## Deployment

* Render
* MongoDB Atlas

---

# Project Structure

```text
url-shortener/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── src/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── services/
│   └── utils/
│
├── index.js
├── package.json
└── README.md
```

---

# API Endpoints

## Authentication

### Register

```
POST /api/auth/register
```

### Login

```
POST /api/auth/login
```

---

## URL APIs

### Create Short URL

```
POST /api/url/shorten
```

### Get User URLs

```
GET /api/url/my-urls
```

### Get URL Statistics

```
GET /api/url/stats/:shortCode
```

### Update URL

```
PATCH /api/url/:shortCode
```

### Delete URL

```
DELETE /api/url/:shortCode
```

### Redirect

```
GET /:shortCode
```

---

# Local Setup

Clone the repository:

```bash
git clone <repository-url>
```

Install backend dependencies:

```bash
npm install
```

Install frontend dependencies:

```bash
cd frontend
npm install
```

Run backend:

```bash
npm run dev
```

Run frontend:

```bash
cd frontend
npm run dev
```

---

# Environment Variables

Create a `.env` file in the backend root:

```env
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
BASE_URL=http://localhost:3000
```

---

# Roadmap

* Frontend Dashboard
* Authentication UI
* Analytics Dashboard
* Custom URL Alias
* Link Expiration
* AI Slug Suggestions
* Forgot Password
* API Documentation (Swagger)
* Docker Support
* Unit & Integration Tests

---

# License

This project is created for learning, portfolio, and demonstration purposes.
