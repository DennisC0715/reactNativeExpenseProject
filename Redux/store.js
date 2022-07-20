import { configureStore } from "@reduxjs/toolkit";
import expenseReducer from "./reducers";

export const store = configureStore({
  reducer: {
    expense: expenseReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
