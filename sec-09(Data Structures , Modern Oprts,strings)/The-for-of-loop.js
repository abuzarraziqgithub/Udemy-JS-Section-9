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

/*
-> The for of loop is the new way of looping over arrays , introduced in ES6.
*/

const menu = [...resturant.mainMenu, ...resturant.starterMenu];

console.log("------- Simple for loop ----------");
// Instead of doing this:
for (let i = 0; i < menu.length; i++) {
  // if we want to also log the indexes:
  console.log(i + 1, menu[i]);
  //  menu[0] = Pizza
  //  menu[1] = Pasta
  //  menu[2] = Risotto
  //  menu[3] = Focaccia
  //  menu[4] = Bruschetta
}
console.log("----------- for of loop ----------");
// we can use the for of loop:
for (const item of menu) console.log(item);
// if we want to log the indexes as well:

for (const itemWithIndex of menu.entries()) {
  console.log(itemWithIndex);
}

for (const itemWithNo of menu.entries()) {
  console.log(`${itemWithNo[0] + 1} : ${itemWithNo[1]}`);
}

// using destructuring :
console.log(`-------  USING DESTRUCTURING ------`);
for (const [itemNo, item] of menu.entries()) {
  console.log(`${itemNo + 1} : ${item}`);
}
