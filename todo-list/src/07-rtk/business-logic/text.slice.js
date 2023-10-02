import { createSlice } from "@reduxjs/toolkit";
import { taskAdded } from "./actions";

const slice = createSlice({
  name: "text",

  initialState: "",

  reducers: {
    textChanged(state, action) {
      return action.payload;
    },
  },

  extraReducers: {
    [taskAdded]() {
      return "";
    },
  },
});

export default slice.reducer;
export const { textChanged } = slice.actions;
