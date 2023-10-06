const capitalize = require('./capitalize');

test('capitalize', () => {
  expect(capitalize('this is a test')).toBe('This is a test');
});

test('not string', () => {
  expect(() => capitalize(23)).toThrow('input must be a string');
});
test('empty', () => {
  expect(() => capitalize()).toThrow('input must be a string');
});

test('single character', () => {
  expect(capitalize('b')).toBe('B');
});
