"use strict";

/*
-> Map is a data structure , that we can use in JavaScript  to  map values to keys.

-> Just like in objects , data is stored in key value pairs in maps.

-> The big difference in objects and maps is , we can actually use any data type like numbers strings arrays objects ,as a key to value.

-> In Objects , we can just use strings as a key .

*/

const rest = new Map();

rest.set("name", "Abuzar");
rest.set(1, "SpinKhak").set(2, "Islamabad");
// The set  here is a method , which works just like add method.
// It not just upadte the value but also returns the map as well.
// The fact that the set method actually returns the updated map , allows us to chain the set method like this.
rest
  .set("Categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "we are open :D")
  .set(false, "We are closed :(");

console.log(rest);

// In order to read data from a map , we use the get method.

// console.log(rest.get(true));

// we can have Boolean keys:
// we also have the open and he close time.

// let's we have some current time:

const time = 8;
const checkingTime = rest.get(
  time > rest.get("open") && time < rest.get("close")
);
// The logic here, is we have two conditions : If the time is greater than 11 and also the time is less than 23.
//  we will get either true or false.
// Now the logic is , If the codition become true , the true value will map the above string and this is amazing.
console.log(checkingTime); // we are close

//  we can use objects as map keys:
const arr = [1, 2];
rest.set(arr, "Test");
// rest.set([1, 2], "Test");
console.log(rest);
// we cannot get the array value use as key.
//  because it will be considered as a new value into the heap.
console.log(rest.get([1, 2])); //undefined
console.log(rest.get(arr)); // Test
// in oreder to solve this , we should first store the key array into the variable , and then use it as a key, because it will refers to the same place in memory

// we can also use map for DOM elements , because they are also special type objects.

rest.set(document.querySelector("h1"), "Heading");

console.log(rest);

// That's all about Map.
// Let's talk more about Map , in the next lecture.
