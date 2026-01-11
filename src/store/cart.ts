import type { ICart } from "../types/cart.types";
import { apiSlice } from "./app/api.slice";

const CART_URL = "/cart/";

export const cartApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCart: builder.query<ICart, void>({
      query: () => CART_URL,
      providesTags: ["Cart"],
    }),
  }),
});

export const { useGetCartQuery } = cartApiSlice;
