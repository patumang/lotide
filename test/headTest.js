const assertEqual = require('../assertEqual');
const head = require('../head');

assertEqual(head(), 5);
assertEqual(head([]), "hello");
assertEqual(head([5,6,7]), 5);
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([2]), 1);
assertEqual(head(["5"]), "5");
assertEqual(head("1"), "1");
assertEqual(head(), false);