/**
 * Logistics Service
 * Service để track orders
 */

import { apiClient } from "../../client";
import { apiEndpoints } from "@/config/api";
import { ApiResponse } from "../../types";
import type { TrackingInfo, TrackingResponse } from "./types";

export const logisticsService = {
  /**
   * Track order
   */
  track: async (id: string | number): Promise<ApiResponse<TrackingResponse>> => {
    const response = await apiClient.get(apiEndpoints.logistics.track(id));
    return response.data;
  },
};

// Export types
export type { TrackingInfo, TrackingResponse };

