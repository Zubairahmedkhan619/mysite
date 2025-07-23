import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   output: 'export',
  /* config options here */
  // ignoreDuringBuilds: true,
    eslint: {
    ignoreDuringBuilds: true, // disables ESLint checks during next build
  },

};

export default nextConfig;
