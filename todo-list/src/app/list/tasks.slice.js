import { createSlice } from "@reduxjs/toolkit";
import {
  fetchTasks,
  taskAdded,
  taskToggled,
  taskDeleted,
} from "../business-logic/thunks";

const slice = createSlice({
  name: "tasks",

  initialState: [],

  extraReducers: {
    [fetchTasks.fulfilled](state, action) {
      return action.payload;
    },

    [taskAdded.fulfilled](state, action) {
      state.push(action.payload);
    },

    [taskToggled.fulfilled](state, action) {
      const index = state.findIndex((task) => task.id === action.payload.id);
      state[index].completed = !state[index].completed;
    },

    [taskDeleted.fulfilled](state, action) {
      return state.filter((task) => task.id !== action.payload);
    },
  },
});

export default slice.reducer;
