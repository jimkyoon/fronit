const hello = require('../main');

describe('Testing main file', () => {
  test('should print out "Hello World!"', () => {
    expect(hello()).toMatch('Hello World!');
  });
});
