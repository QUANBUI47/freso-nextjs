/**
 * Profile Service Types
 * Request và Response types cho Profile service
 */

// Profile
export interface Profile {
  id: string;
  name: string;
  email: string;
  phone?: string;
  avatar?: string;
}

// Update Profile Request
export interface UpdateProfileRequest {
  name?: string;
  email?: string;
  phone?: string;
  avatar?: string;
}

// Profile Response
export interface ProfileResponse {
  data: Profile;
}

// Admin Settings Response
export interface AdminSetting {
  key: string;
  value: string;
}

export interface AdminSettingsResponse {
  results: AdminSetting[];
}

// Homepage Layout Settings
export interface BannerItem {
  url: string;
  image: string;
  internal: boolean;
}

export interface BannerValue {
  desktop: BannerItem[];
  mobile: BannerItem[];
}

export interface BannerConfig {
  orderNum: number;
  value: BannerValue;
}

export interface HomepageLayoutItem {
  name: string;
  id: string;
  display: boolean;
  orderNum?: number;
  value: BannerConfig[];
}

export interface HomepageLayoutSettings {
  name: string;
  value: HomepageLayoutItem[];
}
