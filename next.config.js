/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Fundamental para el modo estático en GitHub Pages
  basePath: '/dragonball-app', // Reemplaza 'dragonball-app' con el nombre de TU repositorio.
  assetPrefix: '/dragonball-app/', // Reemplaza 'dragonball-app' con el nombre de TU repositorio.
  images: {
    unoptimized: true, // Desactiva la optimización de imágenes de Next.js
  },
};

module.exports = nextConfig;