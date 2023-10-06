module.exports = {
  sum: (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') throw new Error('all inputs must be numbers');
    return a + b;
  },
  multiply: (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') throw new Error('all inputs must be numbers');
    return a * b;
  },
  subtract: (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') throw new Error('all inputs must be numbers');
    return a - b;
  },
  divide: (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') throw new Error('all inputs must be numbers');
    if (b === 0) throw new Error("you can't divide by zero");
    return a / b;
  }
};
