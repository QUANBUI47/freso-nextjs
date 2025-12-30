/**
 * Services Index
 * Export tất cả services và types
 */

// User Service
export { userService } from "./user";
export type {
  User,
  CreateUserRequest,
  UpdateUserRequest,
  UserListResponse,
  UserDetailResponse,
} from "./user";

// Profile Service
export { profileService } from "./profile";
export type {
  Profile,
  UpdateProfileRequest,
  ProfileResponse,
} from "./profile";

// Order Service
export { orderService } from "./order";
export type {
  Order,
  OrderItem,
  CreateOrderRequest,
  UpdateOrderRequest,
  OrderListResponse,
  OrderDetailResponse,
} from "./order";

// Product Catalog Service
export { productCatalogService } from "./product";
export type {
  Product,
  Category,
  ProductListParams,
  ProductListResponse,
  CategoryListResponse,
  ProductDetailResponse,
} from "./product";

// Cart Service
export { cartService } from "./cart";
export type {
  Cart,
  CartItem,
  AddCartItemRequest,
  UpdateCartItemRequest,
  CartResponse,
} from "./cart";

// Payment Service
export { paymentService } from "./payment";
export type {
  Payment,
  CreatePaymentRequest,
  PaymentResponse,
} from "./payment";

// Search Service
export { searchService } from "./search";
export type { SearchParams, SearchResponse } from "./search";

// Review Service
export { reviewService } from "./review";
export type {
  Review,
  CreateReviewRequest,
  UpdateReviewRequest,
  ReviewListParams,
  ReviewListResponse,
  ReviewDetailResponse,
} from "./review";

// Logistics Service
export { logisticsService } from "./logistics";
export type { TrackingInfo, TrackingResponse } from "./logistics";

