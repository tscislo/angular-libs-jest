module.exports = {
  "transformIgnorePatterns": [
    "/node_modules/(?!ngx-bootstrap)" // do not transform everything in node_modules besides ngx-bootstrap for which use babel to transpile!
  ],
  // jest by default does not understand ES6 (currently) so in case of ES6 code
  // it has to transpile it to JS using Babel for example
  "transform": {
    "^.+\\.js": "<rootDir>/node_modules/babel-jest"
  }
}
