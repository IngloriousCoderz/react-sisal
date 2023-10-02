import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../service/api";
import { selectTasks } from "./selectors";

export const fetchTasks = createAsyncThunk("tasks/fetchTasks", () =>
  api.fetchTasks()
);

export const taskAdded = createAsyncThunk("tasks/taskAdded", (text) =>
  api.createTask({ text })
);
export const taskToggled = createAsyncThunk(
  "tasks/taskToggled",
  (id, { getState }) => {
    const tasks = selectTasks(getState());
    const task = tasks.find((task) => task.id === id);
    return api.updateTask(id, { completed: !task.completed });
  }
);
export const taskDeleted = createAsyncThunk("tasks/taskDeleted", async (id) => {
  await api.deleteTask(id);
  return id;
});
