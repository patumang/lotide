//function middle to find middle element of an array
const middle = function(myArray) {
  //if the input argument is not an array, return function with error message
  if (!Array.isArray(myArray))
    return "Input is not an Array";

  const myArrayLength = myArray.length;

  //if array is empty, has only one element or has only two elements ,there is no middle
  if (myArrayLength <= 2)
    return [];

  //calculate middle index using deviding array length by 2
  const  middleArrayIndex = Math.floor(myArrayLength / 2);

  const middleArray = [];
  //add element with middle index to middle array
  middleArray.push(myArray[middleArrayIndex]);

  //if array has odd number of elements, return middle array with only one middle item
  if (myArrayLength % 2 !== 0) {
    return middleArray;
  }

  //if array has even number of elements, also add previous index element and return middle array with two middle items
  middleArray.unshift(myArray[middleArrayIndex - 1]);
  return middleArray;

};

module.exports = middle;