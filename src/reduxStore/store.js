import { configureStore } from "@reduxjs/toolkit";
import SideMenuSlice from "./SideMenuSlice";

const store = configureStore({
  reducer: {
    sideMenu: SideMenuSlice,
  },
});

export default store;
