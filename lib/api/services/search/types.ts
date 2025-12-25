/**
 * Search Service Types
 * Request và Response types cho Search service
 */

import { Product } from "../product/types";

export interface SearchParams {
  q: string;
  page?: number;
  pageSize?: number;
  categoryId?: string | number;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
}

export interface SearchResponse {
  data: Product[];
  total?: number;
}

