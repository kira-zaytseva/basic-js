const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let count = 1;
    let currentCount = count;
    // console.dir({length: arr.length, arr})
    if (!arr.length) return 1;

    function countArrayDepth(a) {
      for (let i = 0; i <= a.length - 1; i++) {
        if (Array.isArray(a[i]) && a[i].length !== 0) {
          currentCount++;
          countArrayDepth(a[i]);
        } else if(i === a.length - 1 || a[i].length === 0) {
          if(Array.isArray(a[i])) {
            currentCount++;
          }
          count = Math.max(count, currentCount)
          currentCount = 1;
        }
      }
    }
  
    countArrayDepth(arr);
    return count;
  }
}

module.exports = {
  DepthCalculator
};
