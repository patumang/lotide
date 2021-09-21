# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @patumang/lotide`

**Require it:**

`const _ = require('@patumang/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertEqual(...)`: It checks whether two primitive inputs are same or not and perform assertion test to show Passed or Faild Result
* `head(...)`: It will pop out first element from an array and perform assertion test to show Passed or Faild Result
* `tail(...)`: It will pop out starting from second element to last element from an array and perform assertion test to show Passed or Faild Result
* `middle(...)`: It will pop out middle element if length of an array is odd, otherwise middle 2 elements if length of an array is even and perform assertion test to show Passed or Faild Result
* `eqArrays(...)`: It will compare two arrays and perform assertion test on compare eqArrays result with true and false to show Passed or Faild Result
* `assertArraysEqual(...)`: It will compare two arrays and perform assertion test on compare assertArraysEqual result with expected result to show Passed or Faild Result
* `eqObjects(...)`: It will compare two objects and perform assertion test on compare eqObjects result with true and false to show Passed or Faild Result
* `assertObjectsEqual(...)`: It will compare two objects and perform assertion test on compare assertArraysEqual result with expected result to show Passed or Faild Result
* `countLetters(...)`: It will count number of occurrences of letters in a given string and perform assertion test on compare occurrences of letters with expected result to show Passed or Faild Result
* `countOnly(...)`: It will count key occurrences of only true key values passed as a itemsToCount from a given allItems and perform assertion test on compare occurrences of letters with expected result to show Passed or Faild Result
* `findKey(...)`: It will find a first key arrived from a given object where input stars value matched and perform assertion test to show Passed or Faild Result
* `findKeyByValue(...)`: It will find a key from a given object where input input value matched with the key and perform assertion test to show Passed or Faild Result
* `flatten(...)`: It will flatten input (2 arrays) two dimensional array into one dimensional array and perform assertion test on both arrays equality to show Passed or Faild Result
* `letterPositions(...)`: It will return letters index positions from a input string (except spaces) and perform assertion test to show Passed or Faild Result
* `map(...)`: It will perform string maniplulation on each array element using callback function and perform assertion test to show Passed or Faild Result
* `takeUntil(...)`: It will print array elements until certain condition doen't match, the condition which is mentioned in call back function and perform assertion test to show Passed or Faild Result
* `without(...)`: It will print elements from first array, which are not present in second array and perform assertion test to show Passed or Faild Result