/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let subArrStartindex = 0;
  let subArrEndindex = array.length - 1;

  do {
    const subArrLength = subArrEndindex - subArrStartindex;
    const subArrMiddleIndex = subArrStartindex + Math.floor(subArrLength / 2);

    if (array[subArrMiddleIndex] < value) {
      subArrStartindex = subArrMiddleIndex + 1;
    } else if (array[subArrMiddleIndex] > value) {
      subArrEndindex = subArrMiddleIndex - 1;
    } else {
      return subArrMiddleIndex;
    }
  } while (subArrStartindex <= subArrEndindex);

  return -1;
}

module.exports = findIndex;
