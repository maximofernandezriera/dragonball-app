/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/dragonball-app', // Reemplaza 'dragonball-app' con el nombre de tu repositorio
  assetPrefix: '/dragonball-app/', // Reemplaza 'dragonball-app' con el nombre de tu repositorio
  // ... otras configuraciones (si las tienes)
};

module.exports = nextConfig;
