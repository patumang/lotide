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

//function to show assert arrays are equal or not
const assertArraysEqual = function(actual, expected) {
  //store emoji from decimal codes
  const emojiPassed = String.fromCodePoint(128512);
  const emojiFailed = String.fromCodePoint(128549);

  //check if both arrays are equal or not and log appropriate result
  const equalArrays = eqArrays(actual, expected);
  if (equalArrays)
    console.log(`${emojiPassed} Assertion Passed: [${actual}] === [${expected}]`);
  else
    console.log(`${emojiFailed} Assertion Failed: [${actual}] !== [${expected}]`);
};

//function to return letter positions in a string
const letterPositions = function(sentence) {
  //define empty object
  const results = {};
  let char;

  //loop through string chars
  for (let index = 0; index < sentence.length; index++) {
    //store current letter from the index into "char"
    char = sentence[index];
    //if current char is space then go to next iteration
    if (char === " ")
      continue;

    //if key already exist in our result object for current char then push current index otherwise assign current index to that key
    if (results[char])
      results[char].push(index);
    else
      results[char] = [index];
  }

  //return final object
  return results;
};

// TEST CODE
const inputString = "lighthouse in the house";
const charPositionsObj = letterPositions(inputString);

const verifiedPositions = {
  l: [ 0 ],
  i: [ 1, 11 ],
  g: [ 2 ],
  h: [ 3, 5, 15, 18 ],
  t: [ 4, 14 ],
  o: [ 6, 19 ],
  u: [ 7, 20 ],
  s: [ 8, 21 ],
  e: [ 9, 16, 22 ],
  n: [ 12 ]
};
const charPositionsObjKeys = Object.keys(charPositionsObj);
const verifiedPositionsKeys = Object.keys(verifiedPositions);

console.log(`Result for string: ${inputString}`);
assertArraysEqual(charPositionsObjKeys, verifiedPositionsKeys);

for (let key of charPositionsObjKeys) {
  assertArraysEqual(charPositionsObj[key], verifiedPositions[key]);
}