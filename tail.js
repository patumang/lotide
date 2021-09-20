// FUNCTION IMPLEMENTATION
const tail = function(inputArray) {

  //check if inputArray is not an array then return undefined
  if (!Array.isArray(inputArray)) {
    return undefined;
  }
  
  //check for length of inputArray if array elements are 1 or less, return empty array
  if (inputArray.length <= 1)
    return [];
    
  return inputArray.slice(1);
};

module.exports = tail;