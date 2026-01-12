import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://aegis-vault-server.vercel.app/api",
    prepareHeaders: (headers) => {
      return headers;
    },
    credentials: "include",
  }),
  tagTypes: ["User", "Product", "Cart"],
  endpoints: () => ({}),
});
