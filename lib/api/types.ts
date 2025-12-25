/**
 * Common API Types
 * Types dùng chung cho tất cả services
 */

/**
 * Generic API response type
 */
export interface ApiResponse<T = any> {
  data: T;
  message?: string;
  status: number;
  success: boolean;
}

/**
 * Paginated response
 */
export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}
