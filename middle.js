// function to compare arrays
const eqArrays = function(arr1, arr2) {
  
  //compare that length of both the arrays are same
  if (arr1.length === arr2.length) {
    //initialize index with 0 and assume both arrays are equal, so equal = true
    let index = 0;
    let equal = true;

    //loop through length of an array elements
    while (index < arr1.length) {
      //if values of both array at current index is not same store false to equal and break out of loop
      if (arr1[index] !== arr2[index]) {
        equal = false;
        break;
      }
      index++;
    }
    //return false or true
    return equal;

  } else {
    //if array lengths of both array are not same then return false
    return false;
  }

};

//function to show assert arrays are equal or not
const assertArraysEqual = function(actual, expected) {
  //store emoji from decimal codes
  const emojiPassed = String.fromCodePoint(128512);
  const emojiFailed = String.fromCodePoint(128549);

  //check if both arrays are equal or not and log appropriate result
  const equalArrays = eqArrays(actual, expected);
  if (equalArrays)
    console.log(`${emojiPassed} Assertion Passed: [${actual}] === [${expected}]`);
  else
    console.log(`${emojiFailed} Assertion Failed: [${actual}] !== [${expected}]`);
};

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

// TEST CODE
const words = ["hello", "world", "lighthouse"];
assertArraysEqual(middle(words), ["world"]);

assertArraysEqual(middle("hello"), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);