const formatPascal = require('../utils/formatPascal');

describe('formatPascal', () => {
  test('formats component title to Pascal', () => {
    expect(formatPascal('one')).toBe('One');
  });

  test('removes integers', () => {
    expect(formatPascal('two3')).toBe('Two');
  });

  test('removes spaces, capitalizes character after space', () => {
    expect(formatPascal('main container')).toBe('MainContainer');
  });

  test('removes underscore, capitalizes character after space', () => {
    expect(formatPascal('app_container')).toBe('AppContainer');
  });

  test('removes punctuation, capitalizes character after space', () => {
    expect(formatPascal('another.thing')).toBe('AnotherThing');
  });

  test('turns all caps into formated name', () => {
    expect(formatPascal('MIDDLE')).toBe('Middle');
  });
});
