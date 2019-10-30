module.exports = {
  "transform": {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.jsx?$": "babel-jest"
  },
  "testPathIgnorePatterns": [
    "./node_modules",
    "./templates"
  ]
}
