module.exports = (str) => {
  if (typeof str !== 'string') throw new Error('input must be a string');
  return str.at(0).toUpperCase() + str.slice(1);
};
