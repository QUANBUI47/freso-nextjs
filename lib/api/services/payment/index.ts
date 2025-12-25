/**
 * Payment Service
 * Service để quản lý payments
 */

import { apiClient } from "../../client";
import { apiEndpoints } from "@/config/api";
import { ApiResponse } from "../../types";
import type { Payment, CreatePaymentRequest, PaymentResponse } from "./types";

export const paymentService = {
  /**
   * Create payment
   */
  create: async (data: CreatePaymentRequest): Promise<ApiResponse<PaymentResponse>> => {
    const response = await apiClient.post(apiEndpoints.payments.create(), data);
    return response.data;
  },

  /**
   * Verify payment
   */
  verify: async (id: string | number): Promise<ApiResponse<PaymentResponse>> => {
    const response = await apiClient.post(apiEndpoints.payments.verify(id));
    return response.data;
  },
};

// Export types
export type {
  Payment,
  CreatePaymentRequest,
  PaymentResponse,
};

