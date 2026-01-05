/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "192.168.170.14",
        port: "9000",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "125.235.38.229",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
