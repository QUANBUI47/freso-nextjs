/**
 * Environment Variables Type Definitions
 * Định nghĩa types cho environment variables
 */

declare namespace NodeJS {
  interface ProcessEnv {
    // API Configuration
    NEXT_PUBLIC_API_URL: string;
    NEXT_PUBLIC_API_VERSION: string;

    // Service Endpoints (optional với defaults)
    NEXT_PUBLIC_USER_SERVICE?: string;
    NEXT_PUBLIC_PROFILE_SERVICE?: string;
    NEXT_PUBLIC_ORDER_SERVICE?: string;
    NEXT_PUBLIC_PRODUCT_CATALOG_SERVICE?: string;
    NEXT_PUBLIC_LOGISTICS_SERVICE?: string;
    NEXT_PUBLIC_CART_SERVICE?: string;
    NEXT_PUBLIC_PAYMENT_SERVICE?: string;
    NEXT_PUBLIC_SEARCH_SERVICE?: string;
    NEXT_PUBLIC_REVIEW_SERVICE?: string;
  }
}

