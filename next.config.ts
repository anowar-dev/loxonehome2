import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    domains: ['images.pexels.com'],
    unoptimized: true,
  },
};

export default nextConfig;
