/**
 * Profile Service Types
 * Request và Response types cho Profile service
 */

export interface Profile {
  id: string | number;
  userId: string | number;
  firstName?: string;
  lastName?: string;
  phone?: string;
  address?: string;
  avatar?: string;
  // Add other profile fields
}

export interface UpdateProfileRequest {
  firstName?: string;
  lastName?: string;
  phone?: string;
  address?: string;
  avatar?: string;
  // Add other update fields
}

export interface ProfileResponse {
  data: Profile;
}

