import { configureStore } from "@reduxjs/toolkit";
import SideMenuSlice from "./SideMenuSlice";
import LiveChatSlice from "./LiveChatSlice";
import SearchSlice from "./SearchSlice";

const store = configureStore({
  reducer: {
    sideMenu: SideMenuSlice,
    liveChat: LiveChatSlice,
    search: SearchSlice,
  },
});

export default store;
