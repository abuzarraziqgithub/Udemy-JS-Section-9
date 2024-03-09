"use strict";

// Let's start working with strings:

const airline = "TAP Air Portugal";
const plane = "A320";

// We can find the index of every letter like in Arrays:
console.log(plane[0]); // A
console.log(plane[1]); // 3
console.log(plane[2]); // 2

// we can do it directly in the console.
console.log("B737"[0]); // B
// we can also chek the length of string.
console.log(airline.length); // 16
console.log("B737".length); // 4

// Methods for strings:
// There are methods for strings like arrays:

// Find the index of a letter or word
console.log(airline.indexOf("r")); // 6
console.log(airline.lastIndexOf("r")); //10
console.log(airline.indexOf("Portugal")); // 8
// It is also  case sensitive:
console.log(airline.indexOf("portugal")); // -1

// we can also use slice method for extracting the letter or word:
console.log(airline.slice(4)); // starts from position 4 --> Air Portugal.

console.log(airline.slice(4, 7)); // -> first -4 -- 7 from the last/end --> Air

// we can avoid hard code if we don't know the index of a letter or word.

console.log(airline.slice(0, airline.indexOf(" "))); // TAP -> starts from 0 and end on the space .
console.log(airline.slice(airline.lastIndexOf(" ") + 1)); // Portugal -> will cut off all the indexes before it.

// we can also starts from last line:
console.log(airline.slice(-2)); // al
console.log(airline.slice(1, -1)); //

// Let's make a function for more twist:
const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === "B" || s === "E") {
    console.log("You got the middle seat ):");
  } else {
    console.log("You got lucky (:");
  }
};
checkMiddleSeat("11B");
checkMiddleSeat("23C");
checkMiddleSeat("3E");

/*
--> Now the point is , If the string is primitive data type. how it accept and call methods or properties.

-> Now here is the explanation: whenever we call a function ,  behind the scenes : the string automatically converts to object in which the method is then called.

-> and It is also called boxing in JS , because the string object look like a box.

-> When the method is called , then that object automatically canverts back to string.

*/

// we can check how string actually converts to an object:
console.log(new String("Jonas"));
console.log(typeof new String("Abuzar")); // object

//  Now how it converts back to primitive:
console.log(new String("Raziq").indexOf("R")); // 0
console.log(typeof new String("Raziq").slice(1)); // string

// Now let's start with the next video , where we will continue with Strings.
