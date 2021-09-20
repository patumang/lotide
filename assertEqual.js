// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {

  //check if actual or expected is an array or object show error message
  if (typeof actual === "object" || typeof expected === "object") {
    console.log("Invalid Input!");
    return;
  }

  //store emoji from decimal codes
  const emojiPassed = String.fromCodePoint(128512);
  const emojiFailed = String.fromCodePoint(128125);

  //check if both arguments are same or not and log appropriate result
  if (actual === expected) {
    console.log(`${emojiPassed}${emojiPassed}${emojiPassed} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${emojiFailed}${emojiFailed}${emojiFailed} Assertion Failed: ${actual} !== ${expected}`);
  }
    
};

module.exports = assertEqual;