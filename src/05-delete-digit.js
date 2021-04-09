/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  return String(n)
    .split('')
    .map((digit, index, arr) => Number(arr
      .filter((val, ind) => ind !== index)
      .join('')))
    .sort((a, b) => a - b)[String(n).length - 1];
}

module.exports = deleteDigit;
