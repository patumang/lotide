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

//function findKey to find key for a required condition by callback
const findKey = (inputObj, callback) => {
  //store object keys
  const objKeys = Object.keys(inputObj);

  //loop through object elements
  let index = 0;
  while (index < objKeys.length) {
    //make a call to callback function and if it returns true, return current key
    if (callback(inputObj[objKeys[index]]))
      return objKeys[index];
    //increment index by 1
    index++;
  }

  //if callback condition doesn't return true anytime then return undefined
  return undefined;
};

// TEST CODE
const matchKey = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2);

assertEqual(matchKey, "noma");