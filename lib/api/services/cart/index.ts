/**
 * Cart Service
 * Service để quản lý shopping cart
 */

import { apiClient } from "../../client";
import { apiEndpoints } from "@/config/api";
import { ApiResponse } from "../../types";
import type {
  Cart,
  CartItem,
  AddCartItemRequest,
  UpdateCartItemRequest,
  CartResponse,
} from "./types";

export const cartService = {
  /**
   * Get current user's cart
   */
  get: async (): Promise<ApiResponse<CartResponse>> => {
    const response = await apiClient.get(apiEndpoints.carts.get());
    return response.data;
  },

  /**
   * Add item to cart
   */
  addItem: async (data: AddCartItemRequest): Promise<ApiResponse<CartResponse>> => {
    const response = await apiClient.post(apiEndpoints.carts.addItem(), data);
    return response.data;
  },

  /**
   * Update cart item quantity
   */
  updateItem: async (
    id: string | number,
    data: UpdateCartItemRequest
  ): Promise<ApiResponse<CartResponse>> => {
    const response = await apiClient.put(apiEndpoints.carts.updateItem(id), data);
    return response.data;
  },

  /**
   * Remove item from cart
   */
  removeItem: async (id: string | number): Promise<ApiResponse<CartResponse>> => {
    const response = await apiClient.delete(apiEndpoints.carts.removeItem(id));
    return response.data;
  },

  /**
   * Clear cart
   */
  clear: async (): Promise<ApiResponse<void>> => {
    const response = await apiClient.delete(apiEndpoints.carts.clear());
    return response.data;
  },
};

// Export types
export type {
  Cart,
  CartItem,
  AddCartItemRequest,
  UpdateCartItemRequest,
  CartResponse,
};

