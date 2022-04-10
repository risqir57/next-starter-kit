/* eslint-disable @typescript-eslint/no-var-requires */
const nextJest = require('next/jest');
/**
 * @link https://nextjs.org/docs/testing#jest-and-react-testing-library
 */
const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  coverageDirectory: '<rootDir>/coverage/',
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
  ],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  moduleNameMapper: {
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
    '^.+\\.(css|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',
    '^.+\\.(png|jpg|jpeg|gif|webp|avif|ico|bmp|svg)$/i':
      '<rootDir>/__mocks__/fileMock.js',
    '^@assets/(.*)$': '<rootDir>/src/assets/$1',
    '^@configs/(.*)$': '<rootDir>/src/configs/$1',
    '^@containers/(.*)$': '<rootDir>/src/containers/$1',
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@enums/(.*)$': '<rootDir>/src/enums/$1',
    '^@graphql/(.*)$': '<rootDir>/src/graphql/$1',
    '^@hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^@interfaces/(.*)$': '<rootDir>/src/interfaces/$1',
    '^@layouts/(.*)$': '<rootDir>/src/layouts/$1',
    '^@middlewares/(.*)$': '<rootDir>/src/middlewares/$1',
    '^@pages/(.*)$': '<rootDir>/src/pages/$1',
    '^@routers/(.*)$': '<rootDir>/src/routers/$1',
    '^@services/(.*)$': '<rootDir>/src/services/$1',
    '^@styles/(.*)$': '<rootDir>/src/styles/$1',
    '^@utils/(.*)$': '<rootDir>/src/utils/$1',
  },
  testEnvironment: 'jest-environment-jsdom',
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
