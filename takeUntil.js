//function to show array elements until callback fucntion return true
const takeUntil = function(array, callback) {
  //define final return element with empty array
  const filteredArray = [];

  //loop through array elements
  for (let element of array) {
    //make a call to callback function and if it returns true, break out of loop
    if (callback(element))
      break;
    //store current element to final return element
    filteredArray.push(element);
  }

  return filteredArray;
};

//TEST CODE
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);