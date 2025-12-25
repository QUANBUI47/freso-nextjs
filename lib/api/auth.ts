/**
 * Authentication Service
 * Service để xử lý authentication (login, logout, register)
 */

import { apiClient } from './client';
import { tokenManager } from './client';
import { apiConfig } from '@/config/api';

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
  name: string;
  // Add other registration fields
}

export interface AuthResponse {
  token: string;
  refreshToken?: string;
  user: {
    id: string | number;
    email: string;
    name: string;
  };
}

export interface ApiResponse<T = any> {
  data: T;
  message?: string;
  status: number;
  success: boolean;
}

export const authService = {
  /**
   * Login user
   */
  login: async (credentials: LoginRequest): Promise<ApiResponse<AuthResponse>> => {
    const response = await apiClient.post(
      `${apiConfig.apiUrl}${apiConfig.apiVersion}/auth/login`,
      credentials
    );
    
    const { token, refreshToken, user } = response.data.data;
    
    // Store tokens
    tokenManager.setToken(token);
    if (refreshToken) {
      tokenManager.setRefreshToken(refreshToken);
    }
    
    return response.data;
  },

  /**
   * Register new user
   */
  register: async (data: RegisterRequest): Promise<ApiResponse<AuthResponse>> => {
    const response = await apiClient.post(
      `${apiConfig.apiUrl}${apiConfig.apiVersion}/auth/register`,
      data
    );
    
    const { token, refreshToken, user } = response.data.data;
    
    // Store tokens
    tokenManager.setToken(token);
    if (refreshToken) {
      tokenManager.setRefreshToken(refreshToken);
    }
    
    return response.data;
  },

  /**
   * Logout user
   */
  logout: async (): Promise<void> => {
    try {
      await apiClient.post(`${apiConfig.apiUrl}${apiConfig.apiVersion}/auth/logout`);
    } catch (error) {
      // Ignore errors on logout
      console.error('Logout error:', error);
    } finally {
      // Always remove tokens
      tokenManager.removeToken();
    }
  },

  /**
   * Check if user is authenticated
   */
  isAuthenticated: (): boolean => {
    return !!tokenManager.getToken();
  },

  /**
   * Get current token
   */
  getToken: (): string | null => {
    return tokenManager.getToken();
  },
};

