import { createSlice } from "@reduxjs/toolkit";
import { taskAdded } from "../business-logic/thunks";

const slice = createSlice({
  name: "text",

  initialState: "",

  reducers: {
    textChanged(state, action) {
      return action.payload;
    },
  },

  extraReducers: {
    [taskAdded.pending]() {
      return "";
    },
  },
});

export default slice.reducer;
export const { textChanged } = slice.actions;
