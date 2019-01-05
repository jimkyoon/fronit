module.exports = {
  verbose: true,
  moduleFileExtensions: [
    'js',
    'json',
  ],
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
  },
  transformIgnorePatterns: [
    '/node_modules/.*',
  ],
  moduleDirectories: [
    'node_modules',
  ],
};
