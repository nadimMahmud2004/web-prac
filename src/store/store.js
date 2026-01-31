import { configureStore } from "@reduxjs/toolkit";
import recordReducers from "./recordSlice";

export const store = configureStore({
  reducer: {
    records: recordReducers,
  },
});
