import type { ItemType, Rarity } from "./product.types";

export interface ApiResponse<T> {
  message: string;
  data?: T | null;
}

export interface ApiPaginatedResponse<T> {
  message: string;
  data: {
    success: boolean;
    data: T[];
    pagination: {
      currentPage: number;
      totalPages: number;
      totalCount: number;
      limit: number;
      hasNextPage: boolean;
      hasPrevPage: boolean;
    };
    filters: Record<string, string | number | boolean>;
    sort: {
      sortBy: string;
      sortOrder: string;
    };
  };
}

export interface ProductQueryParams {
  page?: number;
  limit?: number;
  search?: string;
  rarity?: Rarity;
  category?: ItemType;
  minPrice?: number;
  maxPrice?: number;
  requiresAttunement?: boolean;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
}
