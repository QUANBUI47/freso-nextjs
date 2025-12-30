/**
 * Product Catalog Service Types
 * Request và Response types cho Product service
 */

// Product Logo/Image
export interface ProductLogo {
  id: string;
  fileName: string;
  filePath: string;
}

// Product Price
export interface ProductPrice {
  priceFrom: number;
  priceTo: number;
}

// Product Variant (hover)
export interface ProductVariant {
  variantId: string;
  variantName: string;
  skuVariant: string | null;
  priceFrom: number;
  priceTo: number;
}

// Product
export interface Product {
  id: string;
  name: string;
  logo: ProductLogo;
  title: string;
  parentCategory: string;
  subCategory: string;
  unit: string;
  skuProduct: string;
  defaultPrice: ProductPrice;
  hover: ProductVariant[];
  sortOrder?: number;
  tagCart?: boolean;
  hot?: boolean;
  new?: boolean;
}

// Category Banner
export interface CategoryBanner {
  id: string | null;
  fileName: string | null;
  filePath: string;
}

// Category
export interface Category {
  id: string;
  name: string;
  banner: CategoryBanner;
  title: string;
  slug: string;
  products: Product[];
}

// Product List Params
export interface ProductListParams {
  page?: number;
  perPage?: number;
  categoryId?: string;
  search?: string;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
  hot?: boolean;
  new?: boolean;
}

// Product List Response
export interface ProductListResponse {
  results: Product[];
  totalPage: number;
  totalResult: number;
  page: number;
  perPage: number;
}

// Category List Response
export interface CategoryListResponse {
  results: Category[];
  totalPage: number;
  totalResult: number;
  page: number;
  perPage: number;
}

// Product Detail Response
export interface ProductDetailResponse {
  data: Product;
}
