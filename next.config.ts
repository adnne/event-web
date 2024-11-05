import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['picsum.photos'],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
