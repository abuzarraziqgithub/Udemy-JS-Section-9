"use strict";

const resturant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23 , Firenze , Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },

    fri: {
      open: 11,
      close: 23,
    },

    sat: {
      open: 0, //open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    // resturant.starterMenu[index] ,    resturant.mainMenu[index]
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is Your delicious pasta with ${ing1} ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// console.log(resturant.openingHours.mon.open);
// It will give us an error:

// To get rid of this error , we use optional chaining like this:

// With optional chaining:
console.log(resturant.openingHours.mon?.open); // It will give undefined immediately.
console.log(resturant.openingHours?.mon?.open); // undefined.

// Example:
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

for (const day of days) {
  const open = resturant.openingHours[day]?.open ?? "closed";

  console.log(`on ${day} , we open at ${open}`);
}

// Methods:
console.log(resturant.order?.(1, 2) ?? "does not exist.");
console.log(resturant.method?.(1, 2) ?? "does not exist.");

// Arrays:
const users = [{ name: "Jonas", email: "hello@gmail.com" }];

console.log(users[0]?.email ?? "user array empty"); // email at 0 exist
console.log(users[2]?.email ?? "user array empty"); // doesn't exist.

// we use nullish coelescing operator with optional chaining operator because if we want some message if the condition is not true .
