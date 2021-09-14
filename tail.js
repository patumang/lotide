// FUNCTION IMPLEMENTATION
const tail = function(inputArray) {

  //check that inputArray is an array otherwise return undefined
  if (typeof inputArray === "object") {
    //check for length of inputArray is greater than 1 otherwise return empty array
    if (inputArray.length > 1)
      console.log(inputArray.slice(1));
    else
      return [];
  } else {
    return undefined;
  }
};

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

// Test Case: Check the original array
let words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

words = ["Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!