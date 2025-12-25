/**
 * Profile Service
 * Service để quản lý user profile
 */

import { apiClient } from "../../client";
import { apiEndpoints } from "@/config/api";
import { ApiResponse } from "../../types";
import type { Profile, UpdateProfileRequest, ProfileResponse } from "./types";

export const profileService = {
  /**
   * Get current user profile
   */
  get: async (): Promise<ApiResponse<ProfileResponse>> => {
    const response = await apiClient.get(apiEndpoints.profiles.get());
    return response.data;
  },

  /**
   * Update user profile
   */
  update: async (
    data: UpdateProfileRequest
  ): Promise<ApiResponse<ProfileResponse>> => {
    const response = await apiClient.put(apiEndpoints.profiles.update(), data);
    return response.data;
  },
};

// Export types
export type { Profile, UpdateProfileRequest, ProfileResponse };

