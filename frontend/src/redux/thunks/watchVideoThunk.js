import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchWatchVideoData = createAsyncThunk(
  "watch/fetchWatchVideoData",
  async (videoId, { rejectWithValue }) => {
    try {
      const res = await axios.get(
        `http://localhost:8000/api/watch?v=${videoId}`
      );
      // console.log(res.data);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
);