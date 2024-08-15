//create an empty array called myArray.

let myArray = [];

//add three different data types to myArray
myArray.push("Hello", 42, true);
myArray.push("sujan", "magar", true);

//print the length of the array to the console
console.log("length of myArray:", myArray.length); 

//use a loop to log each element in the array to the console.
for(let i = 0; i < myArray.length; i++) {
    console.log("Element", i + 1, ":", myArray[i]);
}

console.log(myArray);