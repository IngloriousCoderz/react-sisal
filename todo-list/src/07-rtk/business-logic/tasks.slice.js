import { createSlice } from "@reduxjs/toolkit";
import { taskAdded } from "./actions";

const LOWEST_ID = 0;
const LAST_ITEM = 1;
const NEXT_ID = 1;

const slice = createSlice({
  name: "tasks",

  initialState: [
    { id: 1, text: "Learn React", completed: true },
    { id: 2, text: "Look for a job", completed: false },
    { id: 3, text: "Forget everything" },
  ],

  reducers: {
    taskToggled(state, action) {
      const index = state.findIndex((task) => task.id === action.payload);
      state[index].completed = !state[index].completed;
    },

    taskDeleted(state, action) {
      const index = state.findIndex((task) => task.id === action.payload);
      state.splice(index, 1);
    },
  },

  extraReducers: {
    [taskAdded](state, action) {
      const maxId = state.length
        ? state[state.length - LAST_ITEM].id
        : LOWEST_ID;

      state.push({ id: maxId + NEXT_ID, text: action.payload });
    },
  },
});

export default slice.reducer;
export const { taskToggled, taskDeleted } = slice.actions;
