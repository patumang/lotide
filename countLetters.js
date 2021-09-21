// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  //store emoji from decimal codes
  const emojiPassed = String.fromCodePoint(128512);
  const emojiFailed = String.fromCodePoint(128125);

  //check if both arguments are same or not and log appropriate result
  if (actual === expected)
    console.log(`${emojiPassed}${emojiPassed}${emojiPassed} Assertion Passed: ${actual} === ${expected}`);
  else
    console.log(`${emojiFailed}${emojiFailed}${emojiFailed} Assertion Failed: ${actual} !== ${expected}`);
};

//function to count occurrances of characters in a string
const countLetters = function(inputString) {

  //define empty object
  const characteroccurrences = {};

  //loop through string chars
  for (let char of inputString) {
    //if current char is space then go to next iteration
    if (char === " ")
      continue;

    //if key already exist in our result object for current char then increment key value by 1 otherwise assign value 1 to that key
    if (characteroccurrences[char])
      characteroccurrences[char]++;
    else
      characteroccurrences[char] = 1;
  }

  //return final object
  return characteroccurrences;

};

// TEST CODE
const charOccur = countLetters("lighthouse in the house");

assertEqual(charOccur["l"], 1);
assertEqual(charOccur["i"], 2);
assertEqual(charOccur["g"], 1);
assertEqual(charOccur["h"], 4);
assertEqual(charOccur["t"], 2);
assertEqual(charOccur["o"], 2);
assertEqual(charOccur["u"], 2);
assertEqual(charOccur["s"], 2);
assertEqual(charOccur["e"], 3);
assertEqual(charOccur["n"], 1);
assertEqual(charOccur[" "], undefined);