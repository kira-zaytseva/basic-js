const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  const methods = ['--discard-prev', '--double-next', '--double-prev', '--discard-next'];
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  if (arr.length === 0) return [];
  console.dir(arr)
  return arr.reduce((acc, rec, index) => {
    // if (typeof(rec) === 'string') {
    //   switch (rec) {
    //     case '--discard-prev': delete acc[index-1];
    //     case '--double-next': return  acc.concat(arr[index+1]);
    //     case '--double-prev': return acc.concat(arr[index-1]);
    //   }
    // } else if (arr[index-1] === '--discard-next') {
    //   return acc;
    // } else acc.concat(rec);
    const prevElement = acc[index - 1];
    if(methods.includes(rec)) {
      if(!index || index === arr.length - 1) return acc
      switch (rec) {
        case '--discard-prev': return [...acc.slice(0, acc.length - 1)];
        case '--double-prev': return [...acc, acc[index -1]];
      }
    }

    if(methods.includes(prevElement)) {
      const nextElement = arr[index + 1]; 
 
      switch (nextElement) {
        case '--double-next': return [...acc.slice(0, acc.length - 1), rec, rec];
        case '--discard-next': {
          if(nextElement === '--discard-prev') {
            return [...acc.slice(0, acc.length - 1), rec];
          }
          return [...acc.slice(0, acc.length - 1)];
        }
      }
    }
    return [...acc, rec];
  }, [])

}

module.exports = {
  transform
};
