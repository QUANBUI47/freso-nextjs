/**
 * Payment Service Types
 * Request và Response types cho Payment service
 */

export interface Payment {
  id: string | number;
  orderId: string | number;
  amount: number;
  method: string;
  status: string;
  transactionId?: string;
  createdAt: string;
  // Add other payment fields
}

export interface CreatePaymentRequest {
  orderId: string | number;
  method: string;
  // Add other payment creation fields
}

export interface PaymentResponse {
  data: Payment;
}

