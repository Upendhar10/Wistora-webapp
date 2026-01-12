import {createAsyncThunk} from "@reduxjs/toolkit"

// Async thunk
export const fetchVideos = createAsyncThunk(
  "videos/fetchVideos",
  async (category, thunkAPI) => {
    try {
      let url = "";

      if (category === "live") {
        url = "http://localhost:8000/api/live";
      } else {
        url = `http://localhost:8000/api/videos?category=${category}`;
      }

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Failed to fetch videos");
      }

      const data = await response.json();
      return data.items || [];
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
