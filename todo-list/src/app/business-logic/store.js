import { configureStore } from "@reduxjs/toolkit";

import text from "../form/text.slice";
import tasks from "../list/tasks.slice";

export const store = configureStore({ reducer: { text, tasks } });
