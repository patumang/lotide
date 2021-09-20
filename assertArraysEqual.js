const _ = require('./index');

//function to show assert arrays are equal or not
const assertArraysEqual = function(actual, expected) {
  //store emoji from decimal codes
  const emojiPassed = String.fromCodePoint(128512);
  const emojiFailed = String.fromCodePoint(128125);

  //check if both arrays are equal or not and log appropriate result
  const equalArrays = _.eqArrays(actual, expected);
  if (equalArrays)
    console.log(`${emojiPassed}${emojiPassed}${emojiPassed} Assertion Passed: [${actual}] === [${expected}]`);
  else
    console.log(`${emojiFailed}${emojiFailed}${emojiFailed} Assertion Failed: [${actual}] !== [${expected}]`);
};

module.exports = assertArraysEqual;