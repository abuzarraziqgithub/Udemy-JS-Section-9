"use strict";
const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
// Third enhancement:
// we can also compute the properties inside objects in enhanced object literals:

// before , we could only compute values , now we can also compute properties
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
