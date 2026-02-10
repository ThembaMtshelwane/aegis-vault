import { isRejectedWithValue, type Middleware } from "@reduxjs/toolkit";
import { logOut } from "../store/features/auth/auth.slice";
import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";

export const refreshTokenMiddleware: Middleware =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (isRejectedWithValue(action)) {
      const payload = action.payload as FetchBaseQueryError;
      const status = payload?.status;

      // If we get a 401, try to refresh the token
      if (status === 401) {
        try {
          // Call refresh endpoint
          const response = await fetch("/api/auth/refresh", {
            method: "POST",
            credentials: "include", // Important: includes cookies
          });

          if (response.ok) {
            // Token refreshed successfully, retry the original request
            // RTK Query will automatically retry with new token
            return next(action);
          } else {
            // Refresh failed, log out user
            dispatch(logOut());
          }
        } catch (error) {
          // Refresh failed, log out user
          dispatch(logOut());
          console.error(error);
        }
      }
    }

    return next(action);
  };
