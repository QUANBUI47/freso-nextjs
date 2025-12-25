/**
 * Order Service
 * Service để quản lý orders
 */

import { apiClient } from "../../client";
import { apiEndpoints } from "@/config/api";
import { ApiResponse } from "../../types";
import type {
  Order,
  OrderItem,
  CreateOrderRequest,
  UpdateOrderRequest,
  OrderListResponse,
  OrderDetailResponse,
} from "./types";

export const orderService = {
  /**
   * Get list of orders
   */
  list: async (): Promise<ApiResponse<OrderListResponse>> => {
    const response = await apiClient.get(apiEndpoints.orders.list());
    return response.data;
  },

  /**
   * Get order by ID
   */
  getById: async (id: string | number): Promise<ApiResponse<OrderDetailResponse>> => {
    const response = await apiClient.get(apiEndpoints.orders.detail(id));
    return response.data;
  },

  /**
   * Create new order
   */
  create: async (data: CreateOrderRequest): Promise<ApiResponse<OrderDetailResponse>> => {
    const response = await apiClient.post(apiEndpoints.orders.create(), data);
    return response.data;
  },

  /**
   * Update order
   */
  update: async (
    id: string | number,
    data: UpdateOrderRequest
  ): Promise<ApiResponse<OrderDetailResponse>> => {
    const response = await apiClient.put(apiEndpoints.orders.update(id), data);
    return response.data;
  },

  /**
   * Cancel order
   */
  cancel: async (id: string | number): Promise<ApiResponse<OrderDetailResponse>> => {
    const response = await apiClient.post(apiEndpoints.orders.cancel(id));
    return response.data;
  },
};

// Export types
export type {
  Order,
  OrderItem,
  CreateOrderRequest,
  UpdateOrderRequest,
  OrderListResponse,
  OrderDetailResponse,
};

