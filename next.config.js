/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: '/dragonball-app',
  assetPrefix: '/dragonball-app/',
  images: {
    unoptimized: true,
  },
  experimental: {
    turbo: false, // Deshabilita Turbopack
  },
};

module.exports = nextConfig;