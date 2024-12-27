/**
 * jest.config.js
 * Configuración principal de Jest para un proyecto Next.js.
 */
const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './', // Directorio raíz de tu proyecto Next.js
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1', // Si usas alias de ruta
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy', // Mapea imports de CSS
  },
};

module.exports = createJestConfig(customJestConfig);
