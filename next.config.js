/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/dragonball-app',
  assetPrefix: '/dragonball-app/',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;