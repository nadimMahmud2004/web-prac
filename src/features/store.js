import { configureStore } from "@reduxjs/toolkit";
import taskReducers from "./taskSlice";
export const store = configureStore({
  reducer: {
    tasks: taskReducers,
  },
});
