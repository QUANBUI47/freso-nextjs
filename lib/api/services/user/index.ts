/**
 * User Service
 * Service để quản lý users
 */

import { apiClient } from "../../client";
import { apiEndpoints } from "@/config/api";
import { ApiResponse } from "../../types";
import type {
  User,
  CreateUserRequest,
  UpdateUserRequest,
  UserListResponse,
  UserDetailResponse,
} from "./types";

export const userService = {
  /**
   * Get list of users
   */
  list: async (): Promise<ApiResponse<UserListResponse>> => {
    const response = await apiClient.get(apiEndpoints.users.list());
    return response.data;
  },

  /**
   * Get user by ID
   */
  getById: async (
    id: string | number
  ): Promise<ApiResponse<UserDetailResponse>> => {
    const response = await apiClient.get(apiEndpoints.users.detail(id));
    return response.data;
  },

  /**
   * Create new user
   */
  create: async (
    data: CreateUserRequest
  ): Promise<ApiResponse<UserDetailResponse>> => {
    const response = await apiClient.post(apiEndpoints.users.create(), data);
    return response.data;
  },

  /**
   * Update user
   */
  update: async (
    id: string | number,
    data: UpdateUserRequest
  ): Promise<ApiResponse<UserDetailResponse>> => {
    const response = await apiClient.put(apiEndpoints.users.update(id), data);
    return response.data;
  },

  /**
   * Delete user
   */
  delete: async (id: string | number): Promise<ApiResponse<void>> => {
    const response = await apiClient.delete(apiEndpoints.users.delete(id));
    return response.data;
  },
};

// Export types
export type {
  User,
  CreateUserRequest,
  UpdateUserRequest,
  UserListResponse,
  UserDetailResponse,
};
