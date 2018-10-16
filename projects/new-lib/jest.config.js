const jestConfig = require('../../unit-tests/parent-jest.config')

module.exports = {
  "globals": {
    "ts-jest": {
      "tsConfigFile": "projects/new-lib/tsconfig.spec.json"
    }
  },
  ...jestConfig
}
