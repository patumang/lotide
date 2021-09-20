// function to compare arrays
const eqArrays = function(arr1, arr2) {
  
  //check if arr1 or arr2 is not an array then return undefined
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return undefined;
  }

  //compare if length of both the arrays are not same, return false
  if (arr1.length !== arr2.length) {
    return false;
  }

  //initialize index with 0 and assume both arrays are equal, so equal = true
  let index = 0;

  //loop through length of an array elements
  while (index < arr1.length) {
    //if values of both array at current index is not same,return false
    if (arr1[index] !== arr2[index]) {
      return false;
    }
    index++;
  }
  //if all elements are same, return true
  return true;

};

module.exports = eqArrays;