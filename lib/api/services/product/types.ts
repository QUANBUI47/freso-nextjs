/**
 * Product Catalog Service Types
 * Request và Response types cho Product service
 */

export interface Product {
  id: string | number;
  name: string;
  description?: string;
  price: number;
  images?: string[];
  categoryId?: string | number;
  stock?: number;
  // Add other product fields
}

export interface ProductListParams {
  page?: number;
  pageSize?: number;
  categoryId?: string | number;
  search?: string;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
}

export interface ProductListResponse {
  data: Product[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

export interface ProductDetailResponse {
  data: Product;
}

