import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api.slice";
import authReducer from "../features/auth/auth.slice";
import { refreshTokenMiddleware } from "../../middleware/refreshToken.middleware";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(apiSlice.middleware)
      .concat(refreshTokenMiddleware),
  devTools: true,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
