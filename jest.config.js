module.exports = {
    collectCoverage: true,
    collectCoverageFrom: [
      'src/**/*.{ts,tsx,js,jsx}',
      '!src/**/index.{ts,tsx,js,jsx}',
      '!src/**/*.d.ts',
    ],
    coverageReporters: ['lcov', 'text'],
    // https://testing-library.com/docs/react-testing-library/setup/#custom-render
    moduleDirectories: [
      'node_modules',
      // add the directory with the test-utils.js file, for example:
      'src/_dev/utils', // a utility folder
      __dirname, // the root directory
    ],
    setupFilesAfterEnv: [
      './src/jest-setup.d.ts',
      '@testing-library/jest-dom/extend-expect',
      './tests/mocks/im-react-localization.jsx',
      './tests/mocks/aep_mf_core.js',
    ],
    testEnvironment: 'jsdom',
    testResultsProcessor: 'jest-sonar-reporter',
    transform: {
      '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    },
  };
  