const caesarCipher = (str, shift = 1) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  if (typeof shift !== 'number') throw new Error('invalid shift value');
  if (shift > 25) throw new Error('shift cannot be longer than 25');

  const punctuationRegex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;

  return str
    .split('')
    .map((letter) => {
      if (letter === ' ') return letter;
      if (punctuationRegex.test(letter)) return letter;

      const letterIsUppercase = letter === letter.toUpperCase();
      if (letterIsUppercase) letter = letter.toLowerCase();

      const letterIndex = alphabet.indexOf(letter);
      let newIndex = letterIndex + shift;
      if (newIndex >= alphabet.length) newIndex = newIndex - 26;

      if (letterIsUppercase) return alphabet[newIndex].toUpperCase();
      return alphabet[newIndex];
    })
    .join('');
};

module.exports = caesarCipher;
