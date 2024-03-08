"use strict";
const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },

  [weekdays[4]]: {
    open: 11,
    close: 23,
  },

  [`day${4 + 5}`]: {
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

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    // resturant.starterMenu[index] ,    resturant.mainMenu[index]
  },

  // 1st Enhancement o object Literals:

  // In ES6 , we don't need to assign an external object with the same pr name:
  //  we can just write the exact name of that object and it will automatically adjusted with that object.
  openingHours, // this variable has assigned the openingHours values.

  // 2nd enhancement of Object Literals:

  // we don't need to write function keyword for methods inside objects:
  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is Your delicious pasta with ${ing1} ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },

  // The third enhancement is above:
};

/*
-> In the previous lecture , we created an empty map, and then use a set method to add keyvalu pairs to it.


-> There is also another way to populating map.
*/

const question = new Map([
  ["question", "What is the best propgramming language in the world?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "Correct"],
  [false, "Try Again"],
]);

console.log(question);
//  It is multiple arrays in the array
// array of arrays
// It is the same as we did before:
console.log(Object.entries(openingHours));

// Converting Objects into Map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Quiz app
console.log(question.get("question"));
for (const [key, value] of question) {
  if (typeof key === "number") {
    console.log(`Answer ${key}: ${value}`);
  }
}
// User input:
const answer = Number(prompt("Your answer"));
console.log(question.get(answer === 1) || question.get(answer !== 1));

// convert map to array:
console.log([...question]);
console.log([...question.keys()]);
console.log([...question.values()]);

// Now you might be wondering , when should we use maps , and when should we use objects?
// Let's uncover that in the next lecture.
