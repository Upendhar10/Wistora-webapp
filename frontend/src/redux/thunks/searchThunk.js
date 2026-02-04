
import { createAsyncThunk } from "@reduxjs/toolkit";

const BACKEND_BASE_URL  = process.env.VITE_BACKEND_URL;

export const searchVideos = createAsyncThunk(
  "search/searchVideos",
  async (query, thunkAPI) => {
    try {
      const response = await fetch(
        // `http://localhost:8000/api/search?q=${query}`
        `${BACKEND_BASE_URL}/api/search?q=${query}`
      );

      if (!response.ok) {
        throw new Error("Search failed");
      }

      const data = await response.json();
      return data.items || [];
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);