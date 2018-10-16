const jestConfig = require('./unit-tests/parent-jest.config');

module.exports = {
  "globals": {
    "ts-jest": {
      "tsConfigFile": "./tsconfig.spec.json"
    },
    "__TRANSFORM_HTML__": true
  },
  "preset": "jest-preset-angular",
  "setupTestFrameworkScriptFile": "<rootDir>/node_modules/jest-preset-angular/setupJest.js",
  ...jestConfig
}
