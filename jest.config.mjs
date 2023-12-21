import nextJest from 'next/jest.js'
 
/** @type {import('jest').Config} */
const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})
 
// Add any custom config to be passed to Jest
const config = {
  modulePaths: ['<rootDir>/src'],
collectCoverage: true,
testEnvironment: 'jest-environment-jsdom',
collectCoverageFrom: [
  "**/*.{js,jsx,ts,tsx}",
  "!**/*.d.ts",
  "!**/node_modules/**",
  "!**/coverage/**",
  "!**/*.type.ts",
  "!<rootDir>/.next/**",
  "!<rootDir>/*.config.ts",
  "!<rootDir>/*.config.js",
  "!<rootDir>/src/app/api/**",
  "!<rootDir>/src/lib/**",
  "!<rootDir>/src/middlewares/**",
  "!<rootDir>/src/middleware.ts",
],
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
}
 
// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config)
