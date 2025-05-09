import type { Config } from 'jest';

const config: Config = {
  verbose: true,
  testEnvironment: "jsdom",
  setupFiles: ["./setupTests.js"],
  moduleNameMapper: {
    '^@nl-design-system-candidate/(.*)$': '<rootDir>/node_modules/@nl-design-system-candidate/$1'
  },
  transformIgnorePatterns: [
    '/node_modules/(?!@nl-design-system-candidate)'
  ],
};

export default config;