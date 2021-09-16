// FUNCTION IMPLEMENTATION
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

//function to find a key of a given value from an object
const findKeyByValue = function(inputObj, givenValue) {
  //retrieve keys and values of and object and store as a array individually
  const inputObjKeys = Object.keys(inputObj);
  const inputObjVals = Object.values(inputObj);

  //find index of givenValue in input object values array
  const indexMatch = inputObjVals.indexOf(givenValue);

  //if index from previous statement is not -1 than get key of a index otherwise return undefined
  return indexMatch >= 0 ? inputObjKeys[indexMatch] : undefined;
};

// TEST CODE
const bestTVShowsByGenre = {
  "sci_fi": "The Expanse",
  "comedy": "Brooklyn Nine-Nine",
  "drama":  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "sci_fi");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);