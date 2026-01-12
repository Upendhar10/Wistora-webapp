import { createSlice } from "@reduxjs/toolkit";
import { fetchWatchVideoData } from "../thunks/watchVideoThunk";

const watchSlice = createSlice({
  name: "watch",
  initialState: {
    loading: false,
    error: null,
    video: null,
    channel : null,
    category : null,
  },
  reducers: {
    clearWatchData: (state) => {
      state.error = null;
      state.loading = false;
      state.video = null;
      state.channel = null;
      state.category =  null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWatchVideoData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWatchVideoData.fulfilled, (state, action) => {
        state.loading = false;
        state.video = action.payload.video;
        state.channel = action.payload.channel;
        state.category = action.payload.category;
      })
      .addCase(fetchWatchVideoData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearWatchData } = watchSlice.actions;
export default watchSlice.reducer;
