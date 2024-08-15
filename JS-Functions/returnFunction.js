/*
create a function that returns another function which adds a specific number
to its arguments
*/

function createAdder(x) {
  return function (y) {
    return x + y;
  };
}

const addFive = createAdder(5);
console.log(addFive(3));
console.log(addFive(10));
