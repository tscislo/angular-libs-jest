const jestConfig = require('../../unit-tests/parent-jest.config')

module.exports = {
  "globals": {
    "ts-jest": {
      "tsConfigFile": "projects/my-shared-library/tsconfig.spec.json"
    }
  },
  ...jestConfig
}
