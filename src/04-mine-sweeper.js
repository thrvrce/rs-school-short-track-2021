/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const gameField = [];

  matrix.forEach((row, currentRowIndex) => {
    gameField.push(new Array(row.length));
    row.forEach((field, currentColumnIndex) => {
      const topRowIndex = currentRowIndex - 1;
      const bottomRowIndex = currentRowIndex + 1;
      const leftColumnIndex = currentColumnIndex - 1;
      const rightColumnIndex = currentColumnIndex + 1;
      const arrayOfRowIndexes = [topRowIndex, currentRowIndex, bottomRowIndex];
      const arrayOfColumnIndexes = [leftColumnIndex, currentColumnIndex, rightColumnIndex];

      const arrayOfMines = arrayOfRowIndexes
        .map((rowNumber) => arrayOfColumnIndexes
          .map((columnNumber) => ((
            rowNumber > -1
            && rowNumber < matrix.length
            && columnNumber < matrix[0].length
            && columnNumber > -1
            && !(rowNumber === currentRowIndex
            && columnNumber === currentColumnIndex))
            ? matrix[rowNumber][columnNumber]
            : undefined))).flat();
      const minesAround = arrayOfMines.reduce((acc, neighbour) => (neighbour ? acc + 1 : acc), 0);
      gameField[currentRowIndex][currentColumnIndex] = minesAround;
    });
  });

  return gameField;
}

module.exports = minesweeper;
