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

// Category
export interface Catalog {
  id: string;
  name: string;
  banner: CatalogBanner;
  title: string;
  slug: string;
  products: Product[];
}

export interface CatalogBanner {
  id: string;
  fileName: string;
  filePath: string;
}
// Category List Response
export interface CatalogListResponse {
  results: Catalog[];
  totalPage: number;
  totalResult: number;
  page: number;
  perPage: number;
}

// Product Detail Response
export interface ProductDetailResponse {
  data: Product;
}

export interface ParentCategory {
  id: string;
  name: string;
  code: string;
  icon: string;
  slug: string;
  categories: Category[];
}

export interface Category {
  id: string;
  name: string;
  code: string;
  slug: string;
}

export interface CategoryListResponse {
  results: ParentCategory[];
  totalPage: number;
  totalResult: number;
  page: number;
  perPage: number;
}
