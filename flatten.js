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

//function to flatten an array
const flatten = function(inputArray) {

  const flattenArray = [];
  //loop through outer elements of an input array
  for (let i = 0; i < inputArray.length; i++) {
    //if an array element is an array push elements of inner array to flattenArray
    if (Array.isArray(inputArray[i])) {
      Array.prototype.push.apply(flattenArray, inputArray[i]);
    } else {
      //if element is not an array, just push the element to flattenArray
      flattenArray.push(inputArray[i]);
    }
  }
  
  //return flatten array
  return flattenArray;
};

// TEST CODE
const words = ["hello", "world", "lighthouse"];
assertArraysEqual(flatten(words), flatten(["hello", "world", "lighthouse"]));

assertArraysEqual(flatten([[1, 2], 3, [4, 5, 6]]), flatten([1, 2, [3, 4], 5, [6]]));
