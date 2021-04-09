/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let numOfCommonCharacters = 0;
  let tmpArrayOfCharacters = s1.split('');

  while (tmpArrayOfCharacters.length) {
    const curCharacterForSearch = tmpArrayOfCharacters[0];
    tmpArrayOfCharacters = tmpArrayOfCharacters
      .filter((character) => character !== curCharacterForSearch);
    const s1Counter = s1.split('').filter((character) => character === curCharacterForSearch).length;
    const s2Counter = s2.split('').filter((character) => character === curCharacterForSearch).length;

    numOfCommonCharacters += s1Counter < s2Counter ? s1Counter : s2Counter;
  }

  return numOfCommonCharacters;
}

module.exports = getCommonCharacterCount;
