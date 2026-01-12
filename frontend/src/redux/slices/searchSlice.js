import { createSlice } from "@reduxjs/toolkit";

import { searchVideos } from "../thunks/searchThunk";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {
    clearSearchResults: (state) => {
      state.data = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchVideos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchVideos.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(searchVideos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearSearchResults } = searchSlice.actions;
export default searchSlice.reducer;
