/**
 * Product Catalog Service
 * Service để quản lý products
 */

import { apiClient } from "../../client";
import { apiEndpoints } from "@/config/api";
import { ApiResponse } from "../../types";
import type {
  Product,
  ProductListParams,
  ProductListResponse,
  ProductDetailResponse,
} from "./types";

export const productCatalogService = {
  /**
   * Get list of products
   */
  list: async (
    params?: ProductListParams
  ): Promise<ApiResponse<ProductListResponse>> => {
    const response = await apiClient.get(apiEndpoints.productCatalogs.list(), {
      params,
    });
    return response.data;
  },

  /**
   * Get product by ID
   */
  getById: async (id: string | number): Promise<ApiResponse<ProductDetailResponse>> => {
    const response = await apiClient.get(apiEndpoints.productCatalogs.detail(id));
    return response.data;
  },
};

// Export types
export type {
  Product,
  ProductListParams,
  ProductListResponse,
  ProductDetailResponse,
};

