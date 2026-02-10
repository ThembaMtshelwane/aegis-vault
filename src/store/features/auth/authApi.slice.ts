import type { ApiResponse } from "../../../types/api.types";
import type { LoginCredentials } from "../../../types/auth.types";
import type { User } from "../../../types/user.types";
import { apiSlice } from "../../app/api.slice";

const AUTH_URL = "/auth";
export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<ApiResponse<{ user: User }>, LoginCredentials>({
      query: (credentials) => ({
        url: `${AUTH_URL}/login`,
        method: "POST",
        body: credentials,
      }),
      invalidatesTags: ["User"],
    }),
    getMe: builder.query<User, void>({
      query: () => `users/profile`,
      providesTags: ["User"],
    }),
    logout: builder.mutation<void, void>({
      query: () => ({
        url: `${AUTH_URL}/logout`,
        method: "POST",
      }),
      invalidatesTags: ["User"],
    }),
    registerUser: builder.mutation<ApiResponse<{ user: User }>, Partial<User>>({
      query: (formData) => ({
        url: `${AUTH_URL}/register`,
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["User"],
    }),
    refresh: builder.mutation<void, void>({
      query: () => ({
        url: `${AUTH_URL}/refresh`,
        method: "POST",
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useGetMeQuery,
  useLogoutMutation,
  useRegisterUserMutation,
  useRefreshMutation
} = authApiSlice;
