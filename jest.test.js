const capitalize = require('./capitalize');
const reverseString = require('./reverseString');
const calculator = require('./calculator');
const caesarCipher = require('./caesarCipher');
const analyzeArray = require('./analyzeArray');

// ==========================================================
//                     CAPITALIZE
// ==========================================================

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

// ==========================================================
//                      REVERSE STRING
// ==========================================================

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

// ==========================================================
//                      CALCULATOR
// ==========================================================

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
test('random', () => {
  const randomA = Math.floor(Math.random() * 101);
  const randomB = Math.floor(Math.random() * 101);

  expect(calculator.sum(randomA, randomB)).toBe(randomA + randomB);
  expect(calculator.multiply(randomA, randomB)).toBe(randomA * randomB);
  expect(calculator.divide(randomA, randomB)).toBe(randomA / randomB);
  expect(calculator.subtract(randomA, randomB)).toBe(randomA - randomB);
});
test('not a number', () => {
  expect(() => calculator.sum('xd', 2)).toThrow('all inputs must be numbers');
  expect(() => calculator.subtract('xd', 2)).toThrow('all inputs must be numbers');
  expect(() => calculator.multiply('xd', 2)).toThrow('all inputs must be numbers');
  expect(() => calculator.divide('xd', 2)).toThrow('all inputs must be numbers');
});
test('not a number 2', () => {
  expect(() => calculator.sum(2, 'xd')).toThrow('all inputs must be numbers');
});
test('no divide 0', () => {
  expect(() => calculator.divide(2, 0)).toThrow("you can't divide by zero");
});

// ==========================================================
//                      CAESAR CIPHER
// ==========================================================

test('caesar cipher', () => {
  expect(caesarCipher('this is a test', 2)).toBe('vjku ku c vguv');
});

test('default shift', () => {
  expect(caesarCipher('this is a test')).toBe('uijt jt b uftu');
});

test('no shift', () => {
  expect(caesarCipher('this is a test', 0)).toBe('this is a test');
});

test('non numeric shift', () => {
  expect(() => caesarCipher('this is a test', 'xddd')).toThrow('invalid shift value');
});
test('shift longer than alphabet', () => {
  expect(() => caesarCipher('this is a test', 26)).toThrow('shift cannot be longer than 25');
});

test('z to a', () => {
  expect(caesarCipher('echo zulu', 2)).toBe('gejq bwnw');
});
test('z to a 2', () => {
  expect(caesarCipher('echo zulu')).toBe('fdip avmv');
});

test('punctuation', () => {
  expect(caesarCipher('this is a test.', 2)).toBe('vjku ku c vguv.');
});

test('uppercase', () => {
  expect(caesarCipher('This Is A Test', 2)).toBe('Vjku Ku C Vguv');
});

test('omega test', () => {
  expect(caesarCipher('This is a test, xyz: something else', 5)).toBe('Ymnx nx f yjxy, cde: xtrjymnsl jqxj');
});

// ==========================================================
//                     ANALYZE ARRAY
// ==========================================================

const arr = [1, 8, 3, 4, 2, 6];

test('non array', () => {
  expect(() => analyzeArray()).toThrow('input must be an array');
});
test('empty array', () => {
  expect(() => analyzeArray([])).toThrow('array cannot be empty');
});
test('non numeric items in array', () => {
  expect(() => analyzeArray([1, 2, 3, 'x', 4, 5, 6])).toThrow('non numeric items found in array');
});
test('average', () => {
  expect(analyzeArray(arr).average).toBe(4);
});
test('min', () => {
  expect(analyzeArray(arr).min).toBe(1);
});
test('max', () => {
  expect(analyzeArray(arr).max).toBe(8);
});
test('length', () => {
  expect(analyzeArray(arr).length).toBe(6);
});
