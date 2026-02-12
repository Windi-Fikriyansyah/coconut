import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'indonesiacoco.com',
      },
      {
        protocol: 'https',
        hostname: 'globalcocoprime.com',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
      },
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '3000',
      },
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    formats: ['image/webp'],
  },
};

export default nextConfig;
