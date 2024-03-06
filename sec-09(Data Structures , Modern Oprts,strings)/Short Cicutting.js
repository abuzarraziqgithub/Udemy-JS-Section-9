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

// Short circuiting means if the first value is true then the js will log that value without looking at the second or the rest values.

// The OR || operator
// Use any data type,return any data  type, short-circuiting;
console.log("-----OR------");
console.log(3 || "jonas");
console.log("" || "jonas");
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || "" || "hello" || 23 || null);

// Instead of using the ternary operator:

resturant.numGuests = 0;
const guests1 = resturant.numGuests ? resturant.numGuests : 0;
console.log(guests1);

// If the numGuests value is equal to 0 , then it will not work because 0 is falsy value

// we can use short Circuiting:
const guests2 = resturant.numGuests || 10;
console.log(guests2);

// The AND && operator:
console.log("------AND--------");
// If the first value is false , then it will stop right there and will not go for evaluating.
console.log(0 && "jonas"); // 0
console.log(7 && "jonas"); //jonas

console.log("hello" && 23 && null && "jonas"); // null

// Practical Example:
if (resturant.orderPizza) {
  resturant.orderPizza("Mushrooms", "Spinach");
}

// Let's do the same using && operator:
resturant.orderPizza && resturant.orderPizza("mushrooms", "olives");

//  In practicle applications, we can use the OR || operator to set default values , and we can use the AND && operator to execute code in the second operand if the first one is true
