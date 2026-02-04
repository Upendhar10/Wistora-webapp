import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BACKEND_BASE_URL  = import.meta.env.VITE_BACKEND_URL;;

export const fetchWatchVideoData = createAsyncThunk(
  "watch/fetchWatchVideoData",
  async (videoId, { rejectWithValue }) => {
    try {
      const res = await axios.get(
        // `http://localhost:8000/api/watch?v=${videoId}`
        `${BACKEND_BASE_URL}/api/watch?v=${videoId}`
      );
      // console.log(res.data);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
);