import { configureStore } from "@reduxjs/toolkit";

import SideMenuSlice from "./slices/SideMenuSlice.js";
import LiveChatSlice from "./slices/LiveChatSlice.js";

import videosReducer from "./slices/videosSlice.js"
import searchReducer from "./slices/searchSlice.js";
import watchReducer from "./slices/watchSlice.js"

const store = configureStore({
  reducer: {
    sideMenu: SideMenuSlice,
    liveChat: LiveChatSlice,

    videos : videosReducer,
    search: searchReducer,
    watch : watchReducer

  },
});

export default store;
