/**
 * Review Service Types
 * Request và Response types cho Review service
 */

export interface Review {
  id: string | number;
  productId: string | number;
  userId: string | number;
  rating: number;
  comment?: string;
  createdAt: string;
  updatedAt?: string;
  userName?: string;
  // Add other review fields
}

export interface CreateReviewRequest {
  productId: string | number;
  rating: number;
  comment?: string;
}

export interface UpdateReviewRequest {
  rating?: number;
  comment?: string;
}

export interface ReviewListParams {
  productId?: string | number;
  page?: number;
  pageSize?: number;
}

export interface ReviewListResponse {
  data: Review[];
  total?: number;
}

export interface ReviewDetailResponse {
  data: Review;
}
