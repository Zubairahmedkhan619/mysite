import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // ignoreDuringBuilds: true,
    eslint: {
    ignoreDuringBuilds: true, // disables ESLint checks during next build
  },

};

export default nextConfig;
