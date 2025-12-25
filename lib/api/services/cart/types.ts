/**
 * Cart Service Types
 * Request và Response types cho Cart service
 */

import { Product } from "../product/types";

export interface CartItem {
  id: string | number;
  productId: string | number;
  quantity: number;
  price: number;
  product?: Product;
}

export interface Cart {
  id: string | number;
  userId: string | number;
  items: CartItem[];
  total: number;
}

export interface AddCartItemRequest {
  productId: string | number;
  quantity: number;
}

export interface UpdateCartItemRequest {
  quantity: number;
}

export interface CartResponse {
  data: Cart;
}

