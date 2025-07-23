import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   output: 'export',
   images: {
     unoptimized: true,
   },
   // ignoreDuringBuilds: true,
   eslint: {
     ignoreDuringBuilds: true, // disables ESLint checks during next build
   },
};

export default nextConfig;