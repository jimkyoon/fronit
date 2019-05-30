/**
 * Returns a string that is formatted to captialize the first letter, lose all numbers, punctuations and spacing
 * @param { String } string - string from command line input
 * @returns { String } formatted component name
 */

const formatPascal = string => string
  .toLowerCase()
  .replace(/[a-z]+/gi,
    word => word[0].toUpperCase() + word.slice(1))
  .replace(/[-_\s0-9\W]+/gi, '');

module.exports = formatPascal;
