/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // ¡Fundamental para GitHub Pages!
  basePath: '/dragonball-app', // Reemplaza 'dragonball-app' por el nombre de TU repositorio.
  assetPrefix: '/dragonball-app/', // Reemplaza 'dragonball-app' por el nombre de TU repositorio.
  images: {
    unoptimized: true, // Deshabilita la optimización de imágenes de Next.js
  },
};

module.exports = nextConfig;
