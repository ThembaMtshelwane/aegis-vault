import type { ICart } from "../types/cart.types";
import { apiSlice } from "./app/api.slice";

const CART_URL = "cart";

export const cartApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCart: builder.query<ICart, void>({
      query: () => CART_URL,
      providesTags: ["Cart"],
    }),
    addToCart: builder.mutation<ICart, { productId: string; quantity: number }>(
      {
        query: ({ productId, quantity }) => ({
          url: `${CART_URL}/add`,
          method: "POST",
          body: { productId, quantity },
        }),
        invalidatesTags: ["Cart"],
      }
    ),
  }),
});

export const { useGetCartQuery, useAddToCartMutation } = cartApiSlice;
