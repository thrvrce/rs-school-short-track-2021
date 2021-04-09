/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let matrixElementsSum = 0;

  for (let columnIndex = 0; matrix[0][columnIndex] !== undefined; columnIndex += 1) {
    for (let rowIndex = 0; rowIndex < matrix.length; rowIndex += 1) {
      if (matrix[rowIndex][columnIndex] !== 0) {
        matrixElementsSum += matrix[rowIndex][columnIndex];
      } else {
        break;
      }
    }
  }

  return matrixElementsSum;
}

module.exports = getMatrixElementsSum;
