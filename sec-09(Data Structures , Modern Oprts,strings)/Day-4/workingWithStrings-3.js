"use strict";

// let's start with some more useful methods:

// Split method:
console.log("a+very+nice+string".split("+"));
// split the + and add other string elements to array.
console.log("Abuzar RaziQ".split(" "));

const [firstName, lastName] = "Abuzar RaziQ".split(" ");
console.log(firstName, lastName);

// Join method:
const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
console.log(newName);

const capitalization = function (name) {
  const names = name.split(" ");
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    // Let's write it in a smart way:
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(" "));
};
capitalization("jessica ann smith davis");
capitalization("jonas schmedtmann");

// Padding:
const message = "Go to gate 23!";
console.log(message.length);
console.log(message.padStart(20, "+").padEnd(30, "+"));

console.log("Jonas".padStart(20, "+").padEnd(30, "+"));

// Let's create a function for masking the credit card digits.

const maskCredit = function (number) {
  const str = number + "";
  const last = str.slice(-4);
  return last.padStart(str.length, "*");
};

console.log(maskCredit(9320932922));
console.log(maskCredit(2222233422333232));

// Repeat Method:
const message2 = "Bad weather ... All Departures Delayed...";
console.log(message2.repeat(2)); // it will reapeat the string 2 times.

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${"*".repeat(n)}`);
};
planesInLine(5);
planesInLine(10);
