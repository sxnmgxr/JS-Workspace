/*
String: the string object represents a sequence of characters and provides
various method to manipulate strings.
*/

let str = "Hello, World";
console.log(str);
console.log(str.length);

console.log(str.concat("How are you?"));

/*
Number: the nummber object represents numerical values and provides various methods to manipulate numbers.
for example, the toFixed methods rounds a number to a specified number to decimal places.
*/
let num = 3.14;
console.log(num.toFixed(30));


/*
Array: The Array object represents a collection of elements
and provides various methods to manipulate arrays. For
example, the push method adds an element to the end of an
array, and the pop method removes the last element from an
array.
*/
let fruits = ["apple","banana","cherry"];
fruits.push("orange");
console.log(fruits);
fruits.pop();
console.log(fruits);

/*
Object: The Object object represents a collection of
key-value pairs and provides various methods to
manipulate objects. For example, the keys method returns
an array of the object's keys, and the values method returns
an array of the object's values.
*/

let person = {name:"sujan", age:23, city:"KTM"};
console.log(Object.keys(person));
console.log(Object.values(person));
