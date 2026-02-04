# 🎬 Wistora – Video Streaming Platform

Wistora is a frontend-focused video streaming platform built to explore **real-world React architecture**, state management, and secure API integration.

This project emphasizes **clean UI, predictable state flow, and separation of concerns**.

🔗 **Live Demo:** `<repo link>`

📦 **Github Repo:** `<repo link>`

<!-- 📦 **Frontend Repo:**  -->
<!-- 📦 **BFF Repo:** `<repo link if separate>` -->

---

## Why this project exists

Most beginner projects directly call third-party APIs from the frontend, exposing sensitive keys and limiting flexibility.

Wistora was built to:

* Practice building **API-driven frontend applications**
* Understand and apply the **Backend-for-Frontend (BFF)** pattern
* Manage complex UI state using **Redux Toolkit**
* Design user-centric features found in real streaming platforms

---

## Features

* Browse videos by category (Trending, Music, etc.)
* Search videos dynamically
* Watch page with video details
* Simulated live chat
* Video-level static comments
* Responsive layout for different screen sizes

---

## Architecture & Design Decisions

### High-Level Architecture

```
React Frontend → BFF (Node + Express) → YouTube Data API
```

```
wistora/
 ├── backend/
 │    ├── src/
 │    └── package.json
 ├── frontend/
 │    ├── src/
 │    └── package.json
 └── README.md
```

### Key Decisions

* **Backend-for-Frontend (BFF):**

  * Prevents exposing YouTube API keys on the client
  * Acts as a proxy to control and sanitize API responses
  * Makes it easier to add caching or rate limiting later

* **Redux Toolkit:**

  * Centralized state for video data and UI interactions
  * Ensures predictable data flow across pages

* **Component-based UI:**

  * Reusable components for video cards, layouts, and navigation

---

## Tech Stack

* **Frontend:** React, JavaScript, Tailwind CSS, Redux Toolkit
* **Backend:** Node.js, Express
* **API:** YouTube Data API

---

## Getting Started (Local Setup)

```bash
# Clone repository
git clone https://github.com/Upendhar10/Wistora-webapp

# Install dependencies
npm install

# Start development server
npm run dev
```

### Note: 
   - You need a Google API Key to run this project in your local machine.
   - API keys are managed securely on the server side using environment variables.

---

## Current Limitations

* Live chat is simulated and not real-time
* Comments under every video are static
* No user authentication yet

---

## Future Improvements

* Add WebSocket-based real-time chat
* Implement user authentication
* Introduce caching and rate limiting at the BFF layer
* Improve accessibility and keyboard navigation

---

<!-- ## Screenshots -->
