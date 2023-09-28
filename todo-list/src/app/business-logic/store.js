import { configureStore } from "@reduxjs/toolkit";

import reducer from "./todo-list.slice";

export const store = configureStore({ reducer });
