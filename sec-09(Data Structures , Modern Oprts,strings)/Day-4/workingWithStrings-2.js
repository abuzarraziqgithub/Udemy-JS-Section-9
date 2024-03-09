"use strict";

// Starts with some more methods:

const airline = "TAP Air Portugal";

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in name:
const passenger = "jOnAS";

// First we need to convert the string into lowercase.
const passengerLower = passenger.toLowerCase();

// Now after changing into lowercase we can do :
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
//   Here's how it works:
//  -> In the first step , we take passenger first index (which is stored in passengerLower variable.)

// Then , convert that 1st index letter into Upper case letter .

// In the last step , we just cut the first letter from the word which was stored in passengerLower .

// The rest letters should be lowercase and the first letter would be upper.
console.log(passengerCorrect);

// Comparing Emails:
const email = "hello@Jonas.io";
const loginEmail = "  Hello@Jonas.Io \n";

// convert uppercase to lower:
const lowerEmail = loginEmail.toLowerCase();
// Removing the space and also the end .
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);
// It worked , but why do we write such a long steps :

// we can do it simply:
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

// let's create a function , in which the user will input  email. that email will be capred to the correct way email:

const emailCheck = function () {
  const userEmail = prompt("Enter Your Email here !");
  const userEmToLower = userEmail.toLowerCase().trim();

  if (userEmail === userEmToLower) {
    console.log("You put it in a correct way.");
  } else {
    console.log(`The correct way of putting email is : ${userEmToLower}`);
  }
};

// emailCheck();

// Replacing:
const priceGB = "288,97pounds";
const priceUS = priceGB.replace("pounds", "$").replace(",", ".");
console.log(priceGB);
console.log(priceUS);

// Replacing the entire word:
const anouncement =
  "All passangers come to boarding door 23 , Boarding door 23";

console.log(anouncement.replaceAll("door", "gate"));

// we can use regular expression as well:
console.log(anouncement.replace(/door/g, "gate"));

// Booleans
const plane = "Airbus A320neo";
console.log(plane.includes("A320")); //true
console.log(plane.includes("Boeing")); //false
console.log(plane.startsWith("Airb")); //true

if (plane.startsWith("Airbus") && plane.endsWith("neo")) {
  console.log("Part of the new Airbus family");
}

// Practice execise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  //   we should convert the strings into lowercase , Think about that.
  if (baggage.includes("gun") || baggage.includes("knife")) {
    console.log("You are NOT ALLOWED on Board");
  } else {
    console.log("Welcome aboard");
  }
};

checkBaggage("I have a laptop , some food and a pocket Knife");
checkBaggage("Got some snacks and a gun for protection");
checkBaggage("Snacks and Camera");
