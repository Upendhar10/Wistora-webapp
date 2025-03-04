import { configureStore } from "@reduxjs/toolkit";
import SideMenuSlice from "./SideMenuSlice";
import LiveChatSlice from "./LiveChatSlice";

const store = configureStore({
  reducer: {
    sideMenu: SideMenuSlice,
    liveChat: LiveChatSlice,
  },
});

export default store;
