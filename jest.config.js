export const preset = 'ts-jest';
export const testEnvironment = 'jsdom';
export const moduleNameMapper = {
  '^src/(.*)$': '<rootDir>/src/$1',
  '^@/(.*)$': '<rootDir>/src/$1'
};
export const setupFilesAfterEnv = ['<rootDir>/src/setupTests.ts'];
