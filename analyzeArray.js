const average = (arr) => arr.reduce((acc, val) => acc + val, 0) / arr.length;
const min = (arr) => Math.min(...arr);
const max = (arr) => Math.max(...arr);

const analyzeArray = (arr) => {
  if (!Array.isArray(arr)) throw new Error('input must be an array');
  if (arr.length === 0) throw new Error('array cannot be empty');
  if (!arr.every((el) => typeof el === 'number')) throw new Error('non numeric items found in array');

  return {
    average: average(arr),
    min: min(arr),
    max: max(arr),
    length: arr.length
  };
};

module.exports = analyzeArray;
