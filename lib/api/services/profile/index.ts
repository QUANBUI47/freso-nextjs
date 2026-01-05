/**
 * Profile Service
 * Service để quản lý user profile
 */

import { apiClient } from "../../client";
import { apiEndpoints } from "@/config/api";
import { ApiResponse } from "../../types";
import type {
  Profile,
  UpdateProfileRequest,
  ProfileResponse,
  AdminSettingsResponse,
  HomepageLayoutSettings,
} from "./types";

export const profileService = {
  /**
   * Get current user profile
   */
  get: async (): Promise<ApiResponse<ProfileResponse>> => {
    const response = await apiClient.get(apiEndpoints.profiles.get());
    return response.data;
  },

  /**
   * Update user profile
   */
  update: async (
    data: UpdateProfileRequest
  ): Promise<ApiResponse<ProfileResponse>> => {
    const response = await apiClient.put(apiEndpoints.profiles.update(), data);
    return response.data;
  },

  /**
   * Get admin settings
   */
  getAdminSettings: async (): Promise<ApiResponse<AdminSettingsResponse>> => {
    const response = await apiClient.get(apiEndpoints.profiles.adminSettings());

    const data = response.data;

    // Normalize response
    if (
      data &&
      typeof data === "object" &&
      "success" in data &&
      "data" in data
    ) {
      return data as ApiResponse<AdminSettingsResponse>;
    }

    return {
      success: true,
      status: response.status,
      data: data as AdminSettingsResponse,
    };
  },

  /**
   * Get homepage banners from admin settings
   */
  getHomepageBanners: async (): Promise<{
    mainBanners: Array<{ id: string | number; image: string; url?: string }>;
    sideBanners: Array<{ image: string; url?: string }>;
    longBanners: Array<{ image: string; url?: string }>;
  }> => {
    try {
      const response = await profileService.getAdminSettings();
      if (!response.success || !response.data) {
        return { mainBanners: [], sideBanners: [], longBanners: [] };
      }

      // Tìm HOMEPAGE_LAYOUT_SETTINGS
      const homepageSettings = response.data.results.find(
        (item) => item.key === "HOMEPAGE_LAYOUT_SETTINGS"
      );

      if (!homepageSettings) {
        return { mainBanners: [], sideBanners: [], longBanners: [] };
      }

      // Parse JSON value
      const layoutSettings: HomepageLayoutSettings = JSON.parse(
        homepageSettings.value
      );

      // Tìm banner1
      const banner1 = layoutSettings.value.find(
        (item) => item.id === "banner1"
      );

      if (!banner1 || !banner1.value || banner1.value.length === 0) {
        return { mainBanners: [], sideBanners: [], longBanners: [] };
      }

      // Extract main banners từ orderNum 1 (desktop)
      const mainBannerConfig = banner1.value.find(
        (item) => item.orderNum === 1
      );
      const mainBanners =
        mainBannerConfig?.value.desktop.map((banner, index) => ({
          id: index + 1,
          image: banner.image,
          url: banner.url,
        })) || [];

      // Extract side banners từ orderNum 2 và 3
      const sideBanner1 = banner1.value.find((item) => item.orderNum === 2);
      const sideBanner2 = banner1.value.find((item) => item.orderNum === 3);

      const sideBanners = [];
      if (sideBanner1?.value.desktop[0]) {
        sideBanners.push({
          image: sideBanner1.value.desktop[0].image,
          url: sideBanner1.value.desktop[0].url,
        });
      }
      if (sideBanner2?.value.desktop[0]) {
        sideBanners.push({
          image: sideBanner2.value.desktop[0].image,
          url: sideBanner2.value.desktop[0].url,
        });
      }

      // Extract long banners từ banner2
      const banner2 = layoutSettings.value.find(
        (item) => item.id === "banner2"
      );

      const longBanners = [];
      if (banner2 && banner2.value && banner2.value.length > 0) {
        // Lấy long banners từ orderNum 1 và 2
        const longBanner1 = banner2.value.find((item) => item.orderNum === 1);
        const longBanner2 = banner2.value.find((item) => item.orderNum === 2);

        if (longBanner1?.value.desktop[0]) {
          longBanners.push({
            image: longBanner1.value.desktop[0].image,
            url: longBanner1.value.desktop[0].url,
          });
        }
        if (longBanner2?.value.desktop[0]) {
          longBanners.push({
            image: longBanner2.value.desktop[0].image,
            url: longBanner2.value.desktop[0].url,
          });
        }
      }

      return { mainBanners, sideBanners, longBanners };
    } catch (error) {
      console.error("Error fetching homepage banners:", error);
      return { mainBanners: [], sideBanners: [], longBanners: [] };
    }
  },
};

// Export types
export type {
  Profile,
  UpdateProfileRequest,
  ProfileResponse,
  AdminSettingsResponse,
  HomepageLayoutSettings,
};
