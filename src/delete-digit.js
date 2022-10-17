const { NotImplementedError } = require('../extensions/index.js');

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
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let numberArray = Array.from(n.toString()).map(Number);
  let result = +numberArray.reduce((acc, rec, index) => {
    if (rec < numberArray[index+1]) {
      return acc;
    } else return acc.concat(rec);
  }, []).join('');
  if (result === n) {
    return +result.toString().slice(0, result.toString().length-1);
  }
  return result;
}

module.exports = {
  deleteDigit
};
