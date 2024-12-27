/**
 * jest.config.js
 * Configuración principal de Jest para un proyecto Next.js.
 */
const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './', // Directorio raíz de tu proyecto Next.js
});

const customJestConfig = {
  // Define el entorno de test como 'jsdom' (navegador simulado)
  testEnvironment: 'jest-environment-jsdom',
  // Especifica el archivo o archivos que se ejecutarán antes de las pruebas
  setupFilesAfterEnv: ['<rootDir>/tests/jest.setup.js'],
  // Opcional: Ignorar transformaciones de ficheros estáticos, CSS, etc.
  moduleNameMapper: {
    // Mapea imports de CSS
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy'
    // Eliminada la referencia a imágenes
  },
};

module.exports = createJestConfig(customJestConfig);
