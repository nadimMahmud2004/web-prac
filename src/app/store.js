import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "../features/counters/countersSlice";

// import postReducer from "../features/posts/postsSlice";
import { apiSlice } from "../features/api/apiSlice";

export const store = configureStore({
  reducer: {
    counters: counterReducer,

    [apiSlice.reducerPath]: apiSlice.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
