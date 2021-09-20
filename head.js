// FUNCTION IMPLEMENTATION
const head = function(inputArray) {

  //check if inputArray is not an array then return undefined
  if (!Array.isArray(inputArray)) {
    return undefined;
  }

  //check for inputArray is empty then return undefined
  if (inputArray.length <= 0) {
    return undefined;
  }

  return inputArray[0];
};

module.exports = head;