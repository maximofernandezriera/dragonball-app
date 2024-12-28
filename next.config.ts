import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: '/dragonball-app',
  assetPrefix: '/dragonball-app/',
  images: {
    unoptimized: true,
  },
};

export default nextConfig; 