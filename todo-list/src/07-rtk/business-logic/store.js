import { configureStore } from "@reduxjs/toolkit";

import text from "./text.slice";
import tasks from "./tasks.slice";

export const store = configureStore({ reducer: { text, tasks } });
