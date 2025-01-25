module.exports = {
    preset: "ts-jest",
    testEnvironment: "jsdom",
    moduleNameMapper: {
      "\\.(css|scss|less|sass)$": "identity-obj-proxy",
      "\\.(jpg|jpeg|png|gif|svg)$": "<rootDir>/__mocks__/fileMock.js",
      "^@/(.*)$": "<rootDir>/src/$1",
    },
    setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
    transform: {
      "^.+\\.(ts|tsx)$": "ts-jest",
    },
    testPathIgnorePatterns: ["/node_modules/", "/dist/"],
  };
  