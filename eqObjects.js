// FUNCTION IMPLEMENTATION
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
    //check if value of both object of current key is not same
    if (object1[key] !== object2[key]) {
      //if any current element from both of the object is not array then return false
      if ((!Array.isArray(object1[key])) || (!Array.isArray(object2[key])))
        return false;
      
      //if both array are not same return false
      if (!eqArrays(object1[key], object2[key]))
        return false;
    }
  }

  //if none of the negative condition match, objects are same.
  return true;
};

//function to assert check equality
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

// TEST CODE
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);

const cd3 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd2, cd3), false);