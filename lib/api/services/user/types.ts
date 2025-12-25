/**
 * User Service Types
 * Request và Response types cho User service
 */

export interface User {
  id: string | number;
  email: string;
  name: string;
  // Add other user fields
}

export interface CreateUserRequest {
  email: string;
  name: string;
  password?: string;
  // Add other registration fields
}

export interface UpdateUserRequest {
  email?: string;
  name?: string;
  // Add other update fields
}

export interface UserListResponse {
  data: User[];
  total?: number;
}

export interface UserDetailResponse {
  data: User;
}
