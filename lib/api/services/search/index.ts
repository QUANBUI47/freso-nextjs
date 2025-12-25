/**
 * Search Service
 * Service để search products
 */

import { apiClient } from "../../client";
import { apiEndpoints } from "@/config/api";
import { ApiResponse } from "../../types";
import type { SearchParams, SearchResponse } from "./types";

export const searchService = {
  /**
   * Search products
   */
  search: async (params: SearchParams): Promise<ApiResponse<SearchResponse>> => {
    const response = await apiClient.get(apiEndpoints.search.query(params.q), {
      params: {
        page: params.page,
        pageSize: params.pageSize,
        categoryId: params.categoryId,
        sortBy: params.sortBy,
        sortOrder: params.sortOrder,
      },
    });
    return response.data;
  },
};

// Export types
export type { SearchParams, SearchResponse };

