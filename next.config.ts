import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Agrega esta línea
  images: {
    unoptimized: true,
  },
  /* otras opciones de configuración aquí */
};

export default nextConfig;
