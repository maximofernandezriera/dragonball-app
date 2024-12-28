/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: '/dragonball-app',
  assetPrefix: '/dragonball-app/',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
