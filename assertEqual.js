// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  //store emoji from decimal codes
  const emojiPassed = String.fromCodePoint(128512);
  const emojiFailed = String.fromCodePoint(128549);

  //check if both arguments are same or not and log appropriate result
  if (actual === expected)
    console.log("%s Assertion Passed: %s === %s", emojiPassed, actual, expected);
  else
    console.log("%s Assertion Failed: %s !== %s", emojiFailed, actual, expected);
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("Lighthouse Labs", "Lighthouse Labs");
assertEqual(1, 1);
assertEqual(1, 5);
assertEqual(1, "1");
assertEqual(true, false);
assertEqual(false);
assertEqual();