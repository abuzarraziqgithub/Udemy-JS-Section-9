"use strict";

/*
-> Introduced in ES2021
*/

const rest1 = {
  fName: "Capri",
  numOfGuests: 25,
};

const rest2 = {
  fName: "La Piazza",
  owner: "Giovanni Rossi",
};

// OR Assignment Operator:

// rest1.numOfGuests = rest1.numOfGuests || 10; // truthy  || 10;
// rest2.numOfGuests = rest2.numOfGuests || 10; // undefined || 10 -> falsy || truthy
// console.log(rest1.numOfGuests); // 20;
// console.log(rest2.numOfGuests); // 10
// we set default value to the rest2 .

// Now let's Introduce the Logical Assignment Op:
// This Op will do the same , but in more concise way:
rest1.numOfGuests ||= 10;
rest2.numOfGuests ||= 10;
//Basically this operator assign value to a variable if that variable is currently falsy.
console.log(rest1);
// console.log(rest2);

// Nulish Assignment Operator:(null undefined)
// When we assign a value to 0 , then it will consider it as falsy :
// To solve this problem , we also have the Nullish assignment Op:
rest2.numOfGuests = 0;
rest2.numOfGuests ??= 10;
// console.log(rest2); // 0

// AND Assignment Operator:
// rest2.owner = rest2.owner &&= "<Anonymous>";
// console.log(rest2); // Anonymous

// rest1.owner = rest1.owner &&= "<Anonymous>";
// console.log(rest1); // undefined

rest2.owner &&= "<Anonymous>";
rest1.owner &&= "<Anonymous>";
console.log(rest1);
console.log(rest2);
