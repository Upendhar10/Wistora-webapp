# Wistora – Video Streaming Platform

Wistora is a **YouTube-inspired video streaming platform** built to demonstrate modern frontend development practices, scalable architecture, and secure API integration.

This project focuses on **building production-like UI systems**, managing complex state, and solving real-world problems like API security using a Backend-for-Frontend (BFF) pattern.

**Live Demo:** https://wistora-webapp.vercel.app/  
**GitHub Repo:** https://github.com/Upendhar10/Wistora-webapp  

---

## Why This Project Exists

Most beginner projects directly call third-party APIs from the frontend, which:
- Exposes sensitive API keys
- Limits scalability
- Makes request handling harder to manage

Wistora was built to go beyond that by:

- Applying the **Backend-for-Frontend (BFF)** pattern
- Building a **state-driven React application**
- Designing a **responsive, user-centric UI**
- Understanding how real-world streaming platforms are structured

---

## Features

- Browse videos by categories (Trending, Music, Gaming, Sports, Live)
- Search videos across YouTube
- Dedicated watch page with video playback
- Static comments system
- Simulated live chat (mock data-based)
- Smooth navigation using React Router
- Fully dark-themed UI
- Shimmer loaders for better perceived performance
- Responsive design across devices

---

## Architecture Overview

### High-Level Flow

```
React Frontend → BFF (Node + Express) → YouTube Data API
```

### Project Structure

```
wistora/
├── frontend/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── redux/
│       ├── utils/
│       ├── App.jsx
│       ├── main.jsx
│       └── index.css
|       ├── .env
│
├── backend/
│   └── src/
│       ├── controllers/
│       ├── routes/
│       ├── utils/
│       └── index.js
│
└── README.md
```

---

## Backend-for-Frontend (BFF)

A key highlight of this project is the implementation of a **BFF layer**.

### Why BFF?

Initially, the application directly consumed the YouTube API from the frontend, which exposed API keys in production.

To solve this:

- All API calls were moved to a **Node.js + Express backend**
- The backend acts as a **secure proxy**
- API keys are stored safely in environment variables

### Benefits

- Protects sensitive credentials
- Centralizes API logic
- Enables response transformation
- Improves error handling
- Prepares system for scaling (caching, rate limiting)

---

## API Endpoints

```
/api/videos   → Fetch category/trending videos
/api/search   → Search videos
/api/live     → Fetch live streams
/api/watch    → Fetch video details
```

---

## State Management

State is managed using **Redux Toolkit** with feature-based slices:

- `VideoSlice` → Video listings
- `WatchSlice` → Watch page state
- `SearchSlice` → Search results
- `SideMenuSlice` → UI/sidebar state

Async operations are handled using **Redux Thunks** for clean separation of concerns.

---

## Live Chat Implementation

- Simulated using **mock/random data**
- Designed to mimic real-time chat behavior
- Helps demonstrate dynamic UI updates
- Currently not powered by WebSockets (planned improvement)

---

## UI & UX Decisions

- Dark mode-first design
- Shimmer loaders for better UX during data fetching
- Fully responsive layout
- Component-based reusable UI structure

---

## Challenges & Learnings

### API Key Exposure

- Initially exposed API keys in frontend
- Identified during deployment
- Solved by implementing **BFF architecture**

### Layout & Routing Design

- Required multiple iterations and planning
- Designed scalable routing using React Router
- Created rough UI sketches before finalizing structure

---

## Current Limitations

- Live chat is simulated (not real-time)
- Comments are static
- No authentication system
- No performance optimizations (yet)

---

## Future Improvements

- Real-time chat using WebSockets
- User authentication & profiles
- Infinite scrolling & pagination
- Dynamic comments & likes system
- Performance optimizations (lazy loading, memoization, caching)
- Search optimization (debouncing, caching)

---

## Tech Stack

### Frontend
- React
- React Router
- Redux Toolkit
- Tailwind CSS

### Backend (BFF)
- Node.js
- Express.js

### API
- YouTube Data API

---

## Getting Started (Local Setup)

```bash
# Clone repository
git clone https://github.com/Upendhar10/Wistora-webapp

# Install dependencies
npm install

# Start development server
npm run dev
````

### Note

* You need a **Google API Key** to run this project locally
* API keys are securely handled via environment variables in the backend

---

## Author

**Upendhar NM**

* GitHub: [https://github.com/Upendhar10](https://github.com/Upendhar10)

---

## Support

If you found this project helpful, consider giving it a star ⭐

