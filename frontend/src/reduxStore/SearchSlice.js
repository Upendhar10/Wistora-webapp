import { createSlice } from "@reduxjs/toolkit";

const SearchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cacheSearchResults: (state, action) => {
      // {searchQuery : [search Suggestions]}
      // {i: [ip , iphone, iphones] , iph: [iphone, iphones]}
      state = Object.assign(state, action.payload);
    },
  },
});

export const { cacheSearchResults } = SearchSlice.actions;

export default SearchSlice.reducer;
