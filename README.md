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
* `eqArrays(...)`: It will compare two arrays and perform assertion test on compare result with true and false to show Passed or Faild Result
* `assertArraysEqual(...)`: It will compare two arrays and perform assertion test to show Passed or Faild Result