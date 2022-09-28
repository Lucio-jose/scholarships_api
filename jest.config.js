const { compilerOptions } =require ('./tsconfig.json');
const { pathsToModuleNameMapper } =require ('ts-jest');

module.exports = {
  clearMocks: true,

  coverageProvider: 'v8',

  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>',
  }),

  preset: 'ts-jest',

  setupFilesAfterEnv: ['<rootDir>/setupTest.ts'],

  testEnvironment: 'node',

  testMatch: ['<rootDir>/src/__tests__/**/*.spec.ts'],

  verbose: true,
};
