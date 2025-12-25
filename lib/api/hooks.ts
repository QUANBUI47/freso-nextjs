/**
 * React Hooks for API calls
 * Custom hooks để sử dụng API services trong React components
 */

import { useState, useEffect, useCallback } from "react";
import { AxiosError } from "axios";
import { ApiResponse } from "./types";

/**
 * Generic API hook state
 */
interface UseApiState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

/**
 * Generic API hook return type
 */
interface UseApiReturn<T> extends UseApiState<T> {
  refetch: () => Promise<void>;
  reset: () => void;
}

/**
 * Generic hook for API calls
 */
export function useApi<T>(
  apiCall: () => Promise<ApiResponse<T>>,
  immediate: boolean = true
): UseApiReturn<T> {
  const [state, setState] = useState<UseApiState<T>>({
    data: null,
    loading: immediate,
    error: null,
  });

  const execute = useCallback(async () => {
    setState((prev) => ({ ...prev, loading: true, error: null }));

    try {
      const response = await apiCall();
      setState({
        data: response.data,
        loading: false,
        error: null,
      });
    } catch (error) {
      const axiosError = error as AxiosError;
      const errorMessage =
        (axiosError.response?.data as any)?.message ||
        axiosError.message ||
        "An error occurred";

      setState({
        data: null,
        loading: false,
        error: errorMessage,
      });
    }
  }, [apiCall]);

  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [execute, immediate]);

  const reset = useCallback(() => {
    setState({
      data: null,
      loading: false,
      error: null,
    });
  }, []);

  return {
    ...state,
    refetch: execute,
    reset,
  };
}

/**
 * Hook for mutations (POST, PUT, DELETE)
 */
interface UseMutationState<T> {
  loading: boolean;
  error: string | null;
}

interface UseMutationReturn<T, P = any> extends UseMutationState<T> {
  mutate: (params: P) => Promise<T | null>;
  reset: () => void;
}

export function useMutation<T, P = any>(
  apiCall: (params: P) => Promise<ApiResponse<T>>
): UseMutationReturn<T, P> {
  const [state, setState] = useState<UseMutationState<T>>({
    loading: false,
    error: null,
  });

  const mutate = useCallback(
    async (params: P): Promise<T | null> => {
      setState({ loading: true, error: null });

      try {
        const response = await apiCall(params);
        setState({ loading: false, error: null });
        return response.data;
      } catch (error) {
        const axiosError = error as AxiosError;
        const errorMessage =
          (axiosError.response?.data as any)?.message ||
          axiosError.message ||
          "An error occurred";

        setState({ loading: false, error: errorMessage });
        return null;
      }
    },
    [apiCall]
  );

  const reset = useCallback(() => {
    setState({ loading: false, error: null });
  }, []);

  return {
    ...state,
    mutate,
    reset,
  };
}

/**
 * Hook for paginated data
 */
interface UsePaginatedApiState<T> {
  data: T[];
  loading: boolean;
  error: string | null;
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

interface UsePaginatedApiReturn<T> extends UsePaginatedApiState<T> {
  refetch: () => Promise<void>;
  nextPage: () => Promise<void>;
  prevPage: () => Promise<void>;
  goToPage: (page: number) => Promise<void>;
  reset: () => void;
}

export function usePaginatedApi<T>(
  apiCall: (
    page: number,
    pageSize: number
  ) => Promise<
    ApiResponse<{
      data: T[];
      total: number;
      page: number;
      pageSize: number;
      totalPages: number;
    }>
  >,
  initialPage: number = 1,
  initialPageSize: number = 10
): UsePaginatedApiReturn<T> {
  const [page, setPage] = useState(initialPage);
  const [pageSize] = useState(initialPageSize);
  const [state, setState] = useState<
    Omit<UsePaginatedApiState<T>, "page" | "pageSize">
  >({
    data: [],
    loading: true,
    error: null,
    total: 0,
    totalPages: 0,
  });

  const execute = useCallback(async () => {
    setState((prev) => ({ ...prev, loading: true, error: null }));

    try {
      const response = await apiCall(page, pageSize);
      setState({
        data: response.data.data,
        loading: false,
        error: null,
        total: response.data.total,
        totalPages: response.data.totalPages,
      });
    } catch (error) {
      const axiosError = error as AxiosError;
      const errorMessage =
        (axiosError.response?.data as any)?.message ||
        axiosError.message ||
        "An error occurred";

      setState({
        data: [],
        loading: false,
        error: errorMessage,
        total: 0,
        totalPages: 0,
      });
    }
  }, [apiCall, page, pageSize]);

  useEffect(() => {
    execute();
  }, [execute]);

  const nextPage = useCallback(async () => {
    if (page < state.totalPages) {
      setPage((prev) => prev + 1);
    }
  }, [page, state.totalPages]);

  const prevPage = useCallback(async () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  }, [page]);

  const goToPage = useCallback(
    async (newPage: number) => {
      if (newPage >= 1 && newPage <= state.totalPages) {
        setPage(newPage);
      }
    },
    [state.totalPages]
  );

  const reset = useCallback(() => {
    setPage(initialPage);
    setState({
      data: [],
      loading: false,
      error: null,
      total: 0,
      totalPages: 0,
    });
  }, [initialPage]);

  return {
    ...state,
    page,
    pageSize,
    refetch: execute,
    nextPage,
    prevPage,
    goToPage,
    reset,
  };
}
