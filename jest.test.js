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

const reverseString = require('./reverseString');

test('reverse', () => {
  expect(reverseString('this is a test')).toBe('tset a si siht');
});

test('reverse number', () => {
  expect(reverseString('23')).toBe('32');
});

test('single letter', () => {
  expect(reverseString('t')).toBe('t');
});

test('not string', () => {
  expect(() => reverseString(23)).toThrow('input must be a string');
});

const calculator = require('./calculator');

test('sum', () => {
  expect(calculator.sum(2, 2)).toBe(4);
});
test('multiply', () => {
  expect(calculator.multiply(2, 2)).toBe(4);
});
test('subtract', () => {
  expect(calculator.subtract(2, 2)).toBe(0);
});
test('divide', () => {
  expect(calculator.divide(2, 2)).toBe(1);
});
test('not a number', () => {
  expect(() => calculator.sum('xd', 2)).toThrow('all inputs must be numbers');
});
