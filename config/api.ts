/**
 * API Configuration
 * Cấu hình các endpoints và base URL cho API
 * Đọc từ environment variables
 */

// Validate required environment variables
const requiredEnvVars = [
  "NEXT_PUBLIC_API_URL",
  "NEXT_PUBLIC_API_VERSION",
] as const;

requiredEnvVars.forEach((varName) => {
  if (!process.env[varName]) {
    throw new Error(
      `Missing required environment variable: ${varName}. Please check your .env.local file.`
    );
  }
});

export const apiConfig = {
  apiUrl: process.env.NEXT_PUBLIC_API_URL!,
  apiVersion: process.env.NEXT_PUBLIC_API_VERSION!,

  // Service endpoints - với fallback values
  userService: process.env.NEXT_PUBLIC_USER_SERVICE || "/users",
  profileService: process.env.NEXT_PUBLIC_PROFILE_SERVICE || "/profiles",
  orderService: process.env.NEXT_PUBLIC_ORDER_SERVICE || "/orders",
  productCatalogService:
    process.env.NEXT_PUBLIC_PRODUCT_CATALOG_SERVICE || "/product-catalogs",
  logisticsService: process.env.NEXT_PUBLIC_LOGISTICS_SERVICE || "/logistics",
  cartService: process.env.NEXT_PUBLIC_CART_SERVICE || "/carts",
  paymentService: process.env.NEXT_PUBLIC_PAYMENT_SERVICE || "/payments",
  searchService: process.env.NEXT_PUBLIC_SEARCH_SERVICE || "/searchs",
  reviewService: process.env.NEXT_PUBLIC_REVIEW_SERVICE || "/reviews",
} as const;

/**
 * Get full API URL for a service endpoint
 */
export const getApiUrl = (service: string, path: string = "") => {
  const baseUrl = `${apiConfig.apiUrl}${apiConfig.apiVersion}${service}`;
  return path ? `${baseUrl}${path}` : baseUrl;
};

/**
 * API Endpoints helper
 */
export const apiEndpoints = {
  // User endpoints
  users: {
    base: getApiUrl(apiConfig.userService),
    list: () => getApiUrl(apiConfig.userService),
    detail: (id: string | number) => getApiUrl(apiConfig.userService, `/${id}`),
    create: () => getApiUrl(apiConfig.userService),
    update: (id: string | number) => getApiUrl(apiConfig.userService, `/${id}`),
    delete: (id: string | number) => getApiUrl(apiConfig.userService, `/${id}`),
  },

  // Profile endpoints
  profiles: {
    base: getApiUrl(apiConfig.profileService),
    get: () => getApiUrl(apiConfig.profileService),
    update: () => getApiUrl(apiConfig.profileService),
  },

  // Order endpoints
  orders: {
    base: getApiUrl(apiConfig.orderService),
    list: () => getApiUrl(apiConfig.orderService),
    detail: (id: string | number) =>
      getApiUrl(apiConfig.orderService, `/${id}`),
    create: () => getApiUrl(apiConfig.orderService),
    update: (id: string | number) =>
      getApiUrl(apiConfig.orderService, `/${id}`),
    cancel: (id: string | number) =>
      getApiUrl(apiConfig.orderService, `/${id}/cancel`),
  },

  // Product Catalog endpoints
  productCatalogs: {
    base: getApiUrl(apiConfig.productCatalogService),
    list: () => getApiUrl(apiConfig.productCatalogService),
    detail: (id: string | number) =>
      getApiUrl(apiConfig.productCatalogService, `/${id}`),
  },

  // Logistics endpoints
  logistics: {
    base: getApiUrl(apiConfig.logisticsService),
    track: (id: string | number) =>
      getApiUrl(apiConfig.logisticsService, `/${id}/track`),
  },

  // Cart endpoints
  carts: {
    base: getApiUrl(apiConfig.cartService),
    get: () => getApiUrl(apiConfig.cartService),
    addItem: () => getApiUrl(apiConfig.cartService, "/items"),
    updateItem: (id: string | number) =>
      getApiUrl(apiConfig.cartService, `/items/${id}`),
    removeItem: (id: string | number) =>
      getApiUrl(apiConfig.cartService, `/items/${id}`),
    clear: () => getApiUrl(apiConfig.cartService, "/clear"),
  },

  // Payment endpoints
  payments: {
    base: getApiUrl(apiConfig.paymentService),
    create: () => getApiUrl(apiConfig.paymentService),
    verify: (id: string | number) =>
      getApiUrl(apiConfig.paymentService, `/${id}/verify`),
  },

  // Search endpoints
  search: {
    base: getApiUrl(apiConfig.searchService),
    query: (query: string) =>
      getApiUrl(apiConfig.searchService, `?q=${encodeURIComponent(query)}`),
  },

  // Review endpoints
  reviews: {
    base: getApiUrl(apiConfig.reviewService),
    list: (productId?: string | number) =>
      productId
        ? getApiUrl(apiConfig.reviewService, `?productId=${productId}`)
        : getApiUrl(apiConfig.reviewService),
    create: () => getApiUrl(apiConfig.reviewService),
    update: (id: string | number) =>
      getApiUrl(apiConfig.reviewService, `/${id}`),
    delete: (id: string | number) =>
      getApiUrl(apiConfig.reviewService, `/${id}`),
  },
} as const;
