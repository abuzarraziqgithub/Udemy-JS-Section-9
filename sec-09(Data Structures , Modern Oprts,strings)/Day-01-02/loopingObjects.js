"use strict";

/*
--> So we learned about looping over the arrays which is an iterable.
---> We can also looping over the objects and objects are not iterables but we will do it in an indirect way
*/
let weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },

  [weekdays[4]]: {
    open: 11,
    close: 23,
  },

  [weekdays[2 + 3]]: {
    open: 0, //open 24 hours
    close: 24,
  },
};

const resturant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23 , Firenze , Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    // resturant.starterMenu[index] ,    resturant.mainMenu[index]
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is Your delicious pasta with ${ing1} ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// Properties Names:
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `we are open on ${properties.length} days.`;
for (const day of properties) {
  openStr += `${day},`;
}
console.log(openStr);

// Property VALUES:
const values = Object.values(openingHours);
console.log(values);

// Entries object
const entries = Object.entries(openingHours);
// console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} , we open at ${open} and close at ${close}`);
}
