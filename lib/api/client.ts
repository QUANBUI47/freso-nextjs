/**
 * Axios API Client
 * Cấu hình axios instance với interceptors cho token authentication
 */

import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from "axios";
import { apiConfig } from "@/config/api";

/**
 * Token storage interface
 * Có thể thay đổi để sử dụng localStorage, sessionStorage, hoặc cookies
 */
class TokenStorage {
  private static readonly TOKEN_KEY = "auth_token";
  private static readonly REFRESH_TOKEN_KEY = "refresh_token";

  static getToken(): string | null {
    if (typeof window === "undefined") return null;
    return localStorage.getItem(this.TOKEN_KEY);
  }

  static setToken(token: string): void {
    if (typeof window === "undefined") return;
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  static removeToken(): void {
    if (typeof window === "undefined") return;
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.REFRESH_TOKEN_KEY);
  }

  static getRefreshToken(): string | null {
    if (typeof window === "undefined") return null;
    return localStorage.getItem(this.REFRESH_TOKEN_KEY);
  }

  static setRefreshToken(token: string): void {
    if (typeof window === "undefined") return;
    localStorage.setItem(this.REFRESH_TOKEN_KEY, token);
  }
}

/**
 * Create axios instance with default config
 */
const createApiClient = (): AxiosInstance => {
  const client = axios.create({
    baseURL: `${apiConfig.apiUrl}${apiConfig.apiVersion}`,
    timeout: 30000, // 30 seconds
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  // Request interceptor - Add token to headers
  client.interceptors.request.use(
    (config) => {
      const token = TokenStorage.getToken();

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    },
    (error: AxiosError) => {
      return Promise.reject(error);
    }
  );

  // Response interceptor - Handle errors and token refresh
  client.interceptors.response.use(
    (response: AxiosResponse) => {
      return response;
    },
    async (error: AxiosError) => {
      const originalRequest = error.config as AxiosRequestConfig & {
        _retry?: boolean;
      };

      // Handle 401 Unauthorized - Token expired or invalid
      if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;

        try {
          // Try to refresh token
          const refreshToken = TokenStorage.getRefreshToken();

          if (refreshToken) {
            // Call refresh token endpoint
            const response = await axios.post(
              `${apiConfig.apiUrl}${apiConfig.apiVersion}/auth/refresh`,
              { refreshToken }
            );

            const { token, refreshToken: newRefreshToken } = response.data;

            TokenStorage.setToken(token);
            if (newRefreshToken) {
              TokenStorage.setRefreshToken(newRefreshToken);
            }

            // Retry original request with new token
            if (originalRequest.headers) {
              originalRequest.headers.Authorization = `Bearer ${token}`;
            }

            return client(originalRequest);
          } else {
            // No refresh token, redirect to login
            TokenStorage.removeToken();
            if (typeof window !== "undefined") {
              window.location.href = "/login";
            }
          }
        } catch (refreshError) {
          // Refresh failed, redirect to login
          TokenStorage.removeToken();
          if (typeof window !== "undefined") {
            window.location.href = "/login";
          }
          return Promise.reject(refreshError);
        }
      }

      // Handle other errors
      return Promise.reject(error);
    }
  );

  return client;
};

// Export singleton instance
export const apiClient = createApiClient();

// Export token management functions
export const tokenManager = {
  getToken: () => TokenStorage.getToken(),
  setToken: (token: string) => TokenStorage.setToken(token),
  removeToken: () => TokenStorage.removeToken(),
  getRefreshToken: () => TokenStorage.getRefreshToken(),
  setRefreshToken: (token: string) => TokenStorage.setRefreshToken(token),
};

// Export types
export type { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError };
