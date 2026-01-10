import type { Product } from "../../types/product.types";
import type {
  ApiPaginatedResponse,
  ApiResponse,
  ProductQueryParams,
} from "../../types/api.types";

import { apiSlice } from "../app/api.slice";

const PRODUCT_URL = "/products";

export const productApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<
      ApiPaginatedResponse<Product>,
      ProductQueryParams
    >({
      query: (params) => {
        const queryParams = new URLSearchParams();

        if (params.page) queryParams.append("page", params.page.toString());
        if (params.limit) queryParams.append("limit", params.limit.toString());
        if (params.search) queryParams.append("search", params.search);
        if (params.rarity) queryParams.append("rarity", params.rarity);
        if (params.category) queryParams.append("category", params.category);
        if (params.minPrice)
          queryParams.append("minPrice", params.minPrice.toString());
        if (params.maxPrice)
          queryParams.append("maxPrice", params.maxPrice.toString());
        if (params.requiresAttunement !== undefined) {
          queryParams.append(
            "requiresAttunement",
            params.requiresAttunement.toString()
          );
        }
        if (params.sortBy) queryParams.append("sortBy", params.sortBy);
        if (params.sortOrder) queryParams.append("sortOrder", params.sortOrder);

        return `${PRODUCT_URL}?${queryParams.toString()}`;
      },
    }),
    getProduct: builder.query<ApiResponse<Product>, string>({
      query: (slug:string) => `${PRODUCT_URL}/${slug}`,
    }),
  }),
});

export const { useGetProductsQuery, useGetProductQuery } = productApiSlice;