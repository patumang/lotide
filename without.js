//function to remove items from source array
const without = function(sourceArray, itemsToRemove) {
  const requiredItems = [];

  //loop through source array
  for (let item of sourceArray) {
    //if current item of source array is not in items to remove array than add current item in requiredITems array
    if (! itemsToRemove.includes(item)) {
      requiredItems.push(item);
    }
  }
  console.log(requiredItems);

};

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

//function to check actual and expected are same or not
const assertEqual = function(actual, expected) {
  //store emoji from decimal codes
  const emojiPassed = String.fromCodePoint(128512);
  const emojiFailed = String.fromCodePoint(128549);

  //check if both arguments are same or not and log appropriate result
  if (actual === expected)
    console.log(`${emojiPassed} Assertion Passed: ${actual} === ${expected}`);
  else
    console.log(`${emojiFailed} Assertion Failed: ${actual} !== ${expected}`);
};

//function to make a call to assertEqual() and eqArrays() functions
const assertArraysEqual = function(arr1, arr2) {
  const equalArrays = eqArrays(arr1, arr2);
  assertEqual(equalArrays, true);
};

// TEST CODE
without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]
without([1, 2, 3], [4]);
without([1, 2, 3], [1, 2, 3]);
without([1], ['1']);
without([1, 2, 3], [true]);
without([1, 2, 3], [undefined]);
without([1, 2, 3], []);
without([], [1]);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);