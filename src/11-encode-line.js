/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  return str
    ? str.match(/([a-z])\1*/g).reduce((encodedString, charactersGroup) => `${encodedString}${charactersGroup.length > 1 ? charactersGroup.length : ''}${charactersGroup[0]}`,
      '')
    : '';
}

module.exports = encodeLine;
