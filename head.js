// FUNCTION IMPLEMENTATION
const head = function(inputArray) {

  //check that inputArray is an array otherwise return undefined
  if (typeof inputArray === "object") {
    //check for inputArray is not empty otherwise return undefined
    if (inputArray.length > 0)
      return inputArray[0];
    else
      return undefined;
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

// TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([2]), 1);
assertEqual(head(["5"]), "5");
assertEqual(head("1"), "1");
assertEqual(head(), false);
