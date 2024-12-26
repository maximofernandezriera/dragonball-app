/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Esta línea es la más importante para corregir el error
  basePath: '/dragonball-app', // Reemplaza 'dragonball-app' con el nombre de tu repositorio
  assetPrefix: '/dragonball-app/', // Reemplaza 'dragonball-app' con el nombre de tu repositorio
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;