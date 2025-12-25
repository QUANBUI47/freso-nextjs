/**
 * Order Service Types
 * Request và Response types cho Order service
 */

export interface OrderItem {
  productId: string | number;
  quantity: number;
  price: number;
  productName?: string;
  // Add other order item fields
}

export interface Order {
  id: string | number;
  userId: string | number;
  items: OrderItem[];
  total: number;
  status: string;
  createdAt: string;
  updatedAt?: string;
  shippingAddress?: string;
  // Add other order fields
}

export interface CreateOrderRequest {
  items: OrderItem[];
  shippingAddress?: string;
  // Add other order creation fields
}

export interface UpdateOrderRequest {
  status?: string;
  shippingAddress?: string;
  // Add other update fields
}

export interface OrderListResponse {
  data: Order[];
  total?: number;
}

export interface OrderDetailResponse {
  data: Order;
}

