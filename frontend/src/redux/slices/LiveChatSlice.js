import { createSlice } from "@reduxjs/toolkit";

const LiveChatSlice = createSlice({
  name: "liveChat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      state.messages.splice(10, 1);
      state.messages.unshift(action.payload);
    },
    clearMessages: (state) => {
      state.messages = []; // Clears the messages
    },
  },
});

export const { addMessage, clearMessages } = LiveChatSlice.actions;
export default LiveChatSlice.reducer;
