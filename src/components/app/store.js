import { configureStore } from "@reduxjs/toolkit";
import linkReducer from "../features/linkSlice";

export const store = configureStore({
  reducer: {
    link: linkReducer,
  },
});
