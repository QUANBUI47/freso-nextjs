/**
 * Product Catalog Service
 * Service để quản lý products
 */

import { apiClient } from "../../client";
import { apiEndpoints } from "@/config/api";
import { ApiResponse } from "../../types";
import type {
  Product,
  Catalog,
  CatalogListResponse,
  ProductDetailResponse,
  ParentCategory,
  Category,
  CategoryListResponse,
} from "./types";

export const productCatalogService = {
  /**
   * Get list of products
   */
  list: async (params?: {
    pageNo?: number;
    limit?: number;
  }): Promise<ApiResponse<CatalogListResponse>> => {
    const response = await apiClient.get(apiEndpoints.productCatalogs.list(), {
      params,
    });
    return response.data;
  },

  /**
   * Get product by ID
   */
  getById: async (
    id: string | number
  ): Promise<ApiResponse<ProductDetailResponse>> => {
    const response = await apiClient.get(
      apiEndpoints.productCatalogs.detail(id)
    );
    return response.data;
  },

  /**
   * Get hot products
   */
  getHotProducts: async (params?: {
    limit?: number;
    isHome?: boolean;
  }): Promise<ApiResponse<CatalogListResponse>> => {
    const response = await apiClient.get(
      apiEndpoints.productCatalogs.hotProducts(),
      {
        params,
      }
    );

    const data = response.data;

    // Normalize response: API có thể trả về trực tiếp ProductListResponse hoặc wrap trong ApiResponse
    // Nếu đã có structure ApiResponse, return luôn
    if (
      data &&
      typeof data === "object" &&
      "success" in data &&
      "data" in data
    ) {
      return data as ApiResponse<CatalogListResponse>;
    }

    // Nếu trả về trực tiếp ProductListResponse, wrap vào ApiResponse
    return {
      success: true,
      status: response.status,
      data: data as CatalogListResponse,
    };
  },

  /**
   * Get new products
   */
  getNewProducts: async (params?: {
    limit?: number;
    isHome?: boolean;
  }): Promise<ApiResponse<CatalogListResponse>> => {
    const response = await apiClient.get(
      apiEndpoints.productCatalogs.newProducts(),
      {
        params,
      }
    );

    const data = response.data;

    // Normalize response: API có thể trả về trực tiếp ProductListResponse hoặc wrap trong ApiResponse
    // Nếu đã có structure ApiResponse, return luôn
    if (
      data &&
      typeof data === "object" &&
      "success" in data &&
      "data" in data
    ) {
      return data as ApiResponse<CatalogListResponse>;
    }

    // Nếu trả về trực tiếp ProductListResponse, wrap vào ApiResponse
    return {
      success: true,
      status: response.status,
      data: data as CatalogListResponse,
    };
  },

  /**
   * Get categories with products
   */
  getCatalogs: async (params?: {
    pageNo?: number;
    limit?: number;
  }): Promise<ApiResponse<CatalogListResponse>> => {
    const response = await apiClient.get(
      apiEndpoints.productCatalogs.catalogs(),
      {
        params,
      }
    );

    const data = response.data;

    // Normalize response: API có thể trả về trực tiếp CategoryListResponse hoặc wrap trong ApiResponse
    // Nếu đã có structure ApiResponse, return luôn
    if (
      data &&
      typeof data === "object" &&
      "success" in data &&
      "data" in data
    ) {
      return data as ApiResponse<CatalogListResponse>;
    }

    // Nếu trả về trực tiếp CategoryListResponse, wrap vào ApiResponse
    return {
      success: true,
      status: response.status,
      data: data as CatalogListResponse,
    };
  },

  /**
   * Get parent categories
   */
  getCategories: async (params?: {
    pageNo?: number;
    limit?: number;
  }): Promise<ApiResponse<CategoryListResponse>> => {
    const response = await apiClient.get(
      apiEndpoints.productCatalogs.categories(),
      {
        params,
      }
    );

    const data = response.data;

    // Normalize response: API có thể trả về trực tiếp CategoryListResponse hoặc wrap trong ApiResponse
    // Nếu đã có structure ApiResponse, return luôn
    if (
      data &&
      typeof data === "object" &&
      "success" in data &&
      "data" in data
    ) {
      return data as ApiResponse<CategoryListResponse>;
    }

    // Nếu trả về trực tiếp CategoryListResponse, wrap vào ApiResponse
    return {
      success: true,
      status: response.status,
      data: data as CategoryListResponse,
    };
  },
};

// Export types
export type {
  Product,
  Catalog,
  CatalogListResponse,
  ProductDetailResponse,
  ParentCategory,
  Category,
  CategoryListResponse,
};
