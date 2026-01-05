/**
 * API Library - Main Export
 * Export tất cả API utilities, services, và hooks
 */

// Client
export { apiClient, tokenManager } from "./client";
export type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from "./client";

// Config
export { apiConfig, apiEndpoints, getApiUrl } from "@/config/api";

// Common Types
export type { ApiResponse, PaginatedResponse } from "./types";

// Services - Export từ services/index.ts
export {
  userService,
  profileService,
  orderService,
  productCatalogService,
  cartService,
  paymentService,
  searchService,
  reviewService,
  logisticsService,
} from "./services";

// Service Types
export type {
  // User
  User,
  CreateUserRequest,
  UpdateUserRequest,
  UserListResponse,
  UserDetailResponse,
  // Profile
  Profile,
  UpdateProfileRequest,
  ProfileResponse,
  // Order
  Order,
  OrderItem,
  CreateOrderRequest,
  UpdateOrderRequest,
  OrderListResponse,
  OrderDetailResponse,
  // Product
  Product,
  ProductDetailResponse,
  Catalog,
  CatalogListResponse,
  Category,
  CategoryListResponse,
  ParentCategory,
  // Cart
  Cart,
  CartItem,
  AddCartItemRequest,
  UpdateCartItemRequest,
  CartResponse,
  // Payment
  Payment,
  CreatePaymentRequest,
  PaymentResponse,
  // Search
  SearchParams,
  SearchResponse,
  // Review
  Review,
  CreateReviewRequest,
  UpdateReviewRequest,
  ReviewListParams,
  ReviewListResponse,
  ReviewDetailResponse,
  // Logistics
  TrackingInfo,
  TrackingResponse,
} from "./services";

// Auth
export { authService } from "./auth";
export type { LoginRequest, RegisterRequest, AuthResponse } from "./auth";

// Hooks
export { useApi, useMutation, usePaginatedApi } from "./hooks";
