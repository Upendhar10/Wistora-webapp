import { createSlice } from "@reduxjs/toolkit";

const SideMenuSlice = createSlice({
  name: "sideMenu",
  initialState: {
    isOpen: false,
  },
  reducers: {
    toggleSideMenu: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggleSideMenu } = SideMenuSlice.actions;
export default SideMenuSlice.reducer;
