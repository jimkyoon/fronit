const hello = require('../ignoreTest');

describe('Testing main file', () => {
  test('should print out "Hello World!"', () => {
    expect(hello()).toMatch('Hello World!');
  });
});
