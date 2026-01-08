import type { LoginCredentials } from "../../../types/auth.types";
import type { User } from "../../../types/user.types";
import { apiSlice } from "../../app/api.slice";

const AUTH_URL = "/auth";
export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<User, LoginCredentials>({
      query: (credentials) => ({
        url: `${AUTH_URL}/login`,
        method: "POST",
        body: credentials,
      }),
      invalidatesTags:["User"]
    }),
    getMe: builder.query<User, void>({
      query: () => `${AUTH_URL}/profile`,
      providesTags: ["User"],
    }),
  }),
});

export const { useLoginMutation, useGetMeQuery } = authApiSlice;
