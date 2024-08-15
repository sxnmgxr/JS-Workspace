/*
Programming Challenge: Array manipulation with functions

You are given an array of integers. Your task is to write a
series of functions to transform this array according to
specific criteria. The functions should be reusable, and you
should use operators and array methods to achieve the
transformations

*/

//sum of all elements:

/*
Write a function sumArray(arr) that takes an array of
integers as input and returns the sum of all the elements
in the array.
*/
let arr = [1, 2, 3, 4, 5];
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
let result = sumArray(arr);
console.log(result);

//multiply each element by a given number

/*
Write a function multiplyArray(arr, multiplier) that takes
an array of integers and a multiplier as input and returns
a new array with each element multiplied by the
multiplier.
*/
function multiplyArray(arr, multiplier) {
  let resultArray = [];
  for (let i = 0; i < arr.length; i++) {
    resultArray.push(arr[i] * multiplier);
  }
  return resultArray;
}
console.log(multiplyArray([1, 2, 3, 4, 5], 5));

//filter even number

/*
Write a function filterEvenNumbers(arr) that takes an
array of integers as input and returns a new array
containing only the even numbers
*/

function filterEvenNumbers(arr) {
  return arr % 2 == 0;
}
const resultEven = arr.filter(filterEvenNumbers);
console.log(resultEven);

//Array to String conversions:

/*
Write a function arrayToString(arr) that takes an array of
integers as input and returns a string representation of
the array, with elements separated by commas
*/

function arrayToString(arr) {
  return arr.join(', ');
}

console.log(arrayToString[(1, 2, 3, 4, 5)]);
