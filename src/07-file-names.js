/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const newArr = [...names];

  newArr.forEach((name, index) => {
    if (newArr.indexOf(name) !== index) {
      const regExp = new RegExp(`^${name}\\([1-9]*\\)$`);
      const arrOfRenamedFiles = newArr
        .filter((value, valueIndex) => regExp.test(value) && valueIndex < index);

      if (arrOfRenamedFiles.length) {
        const maxNumber = arrOfRenamedFiles.reduce(
          (maxNumberAcc, value) => {
            const currentNameAdditionalNumber = Number(value.match(/.*\((?<number>[1-9]*)\)$/).groups.number);

            return maxNumberAcc < currentNameAdditionalNumber
              ? currentNameAdditionalNumber
              : maxNumberAcc;
          }, 0,
        );

        newArr[index] = `${name}(${maxNumber + 1})`;
      } else {
        newArr[index] = `${name}(1)`;
      }
    }
  });

  return newArr;
}

module.exports = renameFiles;
