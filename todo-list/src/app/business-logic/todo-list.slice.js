import { createSlice } from "@reduxjs/toolkit";

const LOWEST_ID = 0;
const LAST_ITEM = 1;
const NEXT_ID = 1;

const slice = createSlice({
  name: "todo-list",

  initialState: {
    text: "",
    tasks: [
      { id: 1, text: "Learn React", completed: true },
      { id: 2, text: "Look for a job", completed: false },
      { id: 3, text: "Forget everything" },
    ],
  },

  reducers: {
    taskAdded(state, action) {
      const { tasks } = state;

      const maxId = tasks.length
        ? tasks[tasks.length - LAST_ITEM].id
        : LOWEST_ID;
      // return [...tasks, { id: maxId + NEXT_ID, text: action.payload }];
      tasks.push({ id: maxId + NEXT_ID, text: action.payload });
    },

    taskToggled(state, action) {
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        ),
      };
    },

    taskDeleted(state, action) {
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    },
  },
});

export default slice.reducer;
export const { taskAdded, taskToggled, taskDeleted } = slice.actions;
