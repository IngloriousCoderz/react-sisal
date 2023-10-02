import { createAction } from "@reduxjs/toolkit";

// action types
// export const TASK_ADDED = "tasks/taskAdded";
export const TASK_TOGGLED = "tasks/taskToggled";
export const TASK_DELETED = "tasks/taskDeleted";

// action creators
// export const taskAdded = (text) => ({ type: TASK_ADDED, payload: text });
export const taskToggled = (id) => ({ type: TASK_TOGGLED, payload: id });
export const taskDeleted = (id) => ({ type: TASK_DELETED, payload: id });

export const taskAdded = createAction("tasks/taskAdded");

// reducer
export default function tasks(state = [], action) {
  switch (action.type) {
    case taskAdded.toString():
      return [...state, action.payload];

    case TASK_TOGGLED:
      return state.map((task) =>
        task.id === action.payload
          ? { ...task, completed: !task.completed }
          : task
      );

    case TASK_DELETED:
      return state.filter((task) => task.id !== action.payload);

    default:
      return state;
  }
}
