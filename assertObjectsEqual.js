// FUNCTION IMPLEMENTATION
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  //store keys of both objects
  const keysObj1 = Object.keys(object1);
  const keysObj2 = Object.keys(object2);

  //if length of both objects are not same then return false
  if (keysObj1.length !== keysObj2.length)
    return false;

  //loop through any one of the both object elements
  for (let key of keysObj1) {
    //check if value of both object of current key is not same then return false
    if (object1[key] !== object2[key]) {
      return false;
    }
  }

  //if none of the negative condition match, objects are same.
  return true;
};

//function to show assertion message Passed or Failed according to object equality
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  //store emoji from decimal codes
  const emojiPassed = String.fromCodePoint(128512);
  const emojiFailed = String.fromCodePoint(128125);

  //check if both objects are same or not and log appropriate result
  if (eqObjects(actual, expected))
    console.log(`${emojiPassed} Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  else
    console.log(`${emojiFailed} Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
};

assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' });
assertObjectsEqual({ "a": 'hello', "b": 2 }, { b: 2, a: 'hello' });
assertObjectsEqual({ a: 1, b: 2 }, { b: 2, a: '1' });
assertObjectsEqual({ a: 1, b: 2 }, { b: 2, a: 1, c: '5' });
assertObjectsEqual({ a: 1, b: 2, c: '5' }, { b: 2, a: 1 });