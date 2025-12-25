/**
 * Review Service
 * Service để quản lý product reviews
 */

import { apiClient } from "../../client";
import { apiEndpoints } from "@/config/api";
import { ApiResponse } from "../../types";
import type {
  Review,
  CreateReviewRequest,
  UpdateReviewRequest,
  ReviewListParams,
  ReviewListResponse,
  ReviewDetailResponse,
} from "./types";

export const reviewService = {
  /**
   * Get list of reviews
   */
  list: async (
    params?: ReviewListParams
  ): Promise<ApiResponse<ReviewListResponse>> => {
    const response = await apiClient.get(
      apiEndpoints.reviews.list(params?.productId),
      {
        params: {
          page: params?.page,
          pageSize: params?.pageSize,
        },
      }
    );
    return response.data;
  },

  /**
   * Create review
   */
  create: async (
    data: CreateReviewRequest
  ): Promise<ApiResponse<ReviewDetailResponse>> => {
    const response = await apiClient.post(apiEndpoints.reviews.create(), data);
    return response.data;
  },

  /**
   * Update review
   */
  update: async (
    id: string | number,
    data: UpdateReviewRequest
  ): Promise<ApiResponse<ReviewDetailResponse>> => {
    const response = await apiClient.put(apiEndpoints.reviews.update(id), data);
    return response.data;
  },

  /**
   * Delete review
   */
  delete: async (id: string | number): Promise<ApiResponse<void>> => {
    const response = await apiClient.delete(apiEndpoints.reviews.delete(id));
    return response.data;
  },
};

// Export types
export type {
  Review,
  CreateReviewRequest,
  UpdateReviewRequest,
  ReviewListParams,
  ReviewListResponse,
  ReviewDetailResponse,
};
