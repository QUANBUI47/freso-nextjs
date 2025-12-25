/**
 * Logistics Service Types
 * Request và Response types cho Logistics service
 */

export interface TrackingInfo {
  id: string | number;
  orderId: string | number;
  status: string;
  currentLocation?: string;
  estimatedDelivery?: string;
  trackingNumber?: string;
  // Add other tracking fields
}

export interface TrackingResponse {
  data: TrackingInfo;
}

