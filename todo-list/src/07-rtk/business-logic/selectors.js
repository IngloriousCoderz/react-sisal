import { createSelector } from "@reduxjs/toolkit";

export const selectText = (state) => state.text;
export const selectTasks = (state) => state.tasks;

// export const selectAreAllTasksCompleted = (state) => {
//   const tasks = selectTasks(state);
//   return tasks.every((task) => task.completed);
// };

export const selectAreAllTasksCompleted = createSelector(selectTasks, (tasks) =>
  tasks.every((task) => task.completed)
);
