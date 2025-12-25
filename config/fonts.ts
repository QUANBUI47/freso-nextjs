import localFont from "next/font/local";

// SF Pro Display - For headings and large text
// Note: Đường dẫn trong Next.js localFont phải là relative từ root của project
// Từ config/fonts.ts, cần đi lên 1 level (..) rồi vào public/assets/fonts/
export const fontDisplay = localFont({
  src: [
    {
      path: "../public/assets/fonts/SF-Pro-Display-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/SF-Pro-Display-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/SF-Pro-Display-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/SF-Pro-Display-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/SF-Pro-Display-Heavy.otf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-sf-pro-display",
  display: "swap",
  fallback: ["system-ui", "-apple-system", "sans-serif"],
});

// SF Pro Text - For body text and smaller sizes
export const fontText = localFont({
  src: [
    {
      path: "../public/assets/fonts/SF-Pro-Text-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/SF-Pro-Text-Semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/SF-Pro-Text-Heavy.otf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-sf-pro-text",
  display: "swap",
  fallback: ["system-ui", "-apple-system", "sans-serif"],
});

// Keep mono font for code blocks
export const fontMono = localFont({
  src: [
    {
      path: "../public/assets/fonts/SF-Pro-Display-Regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-mono",
  display: "swap",
});

// Alias for backward compatibility
export const fontSans = fontDisplay;
