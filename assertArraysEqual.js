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

// TEST CODE
const words = ["hello", "world", "lighthouse"];
assertArraysEqual(words, ["hello", "world", "lighthouse"]);