import { createSlice } from "@reduxjs/toolkit";

const LOWEST_ID = 0;
const LAST_ITEM = 1;
const NEXT_ID = 1;

const slice = createSlice({
  name: "todoList",

  initialState: {
    text: "",
    tasks: [
      { id: 1, text: "Learn React", completed: true },
      { id: 2, text: "Look for a job", completed: false },
      { id: 3, text: "Forget everything" },
    ],
  },

  reducers: {
    textChanged(state, action) {
      state.text = action.payload;
    },

    taskAdded(state, action) {
      const { tasks } = state;

      const maxId = tasks.length
        ? tasks[tasks.length - LAST_ITEM].id
        : LOWEST_ID;

      // return [...tasks, { id: maxId + NEXT_ID, text: action.payload }];
      tasks.push({ id: maxId + NEXT_ID, text: action.payload });
      state.text = "";
    },

    taskToggled(state, action) {
      // return {
      //   ...state,
      //   tasks: state.tasks.map((task) =>
      //     task.id === action.payload
      //       ? { ...task, completed: !task.completed }
      //       : task
      //   ),
      // };

      const index = state.tasks.findIndex((task) => task.id === action.payload);
      state.tasks[index].completed = !state.tasks[index].completed;
    },

    taskDeleted(state, action) {
      // return {
      //   ...state,
      //   tasks: state.tasks.filter((task) => task.id !== action.payload),
      // };

      const index = state.tasks.findIndex((task) => task.id === action.payload);
      state.tasks.splice(index, 1);
    },
  },
});

export default slice.reducer;
export const { textChanged, taskAdded, taskToggled, taskDeleted } =
  slice.actions;
