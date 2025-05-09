import type { Config } from 'jest';

const config: Config = {
  verbose: true,
  testEnvironment: "jsdom",
  setupFiles: ["./setupTests.js"],
};

export default config;