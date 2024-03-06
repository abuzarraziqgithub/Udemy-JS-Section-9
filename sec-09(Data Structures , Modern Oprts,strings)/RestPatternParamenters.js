"use strict";

/*
-> Rest Patterns are exacly looks like a spread operator but actually does the opposite of the spread operator

-> The spread operator is used to upack the array , while rest is to pack elements into array.
*/

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

// Destructuring:

// Spread , because on Right side of =;
const arr = [1, 2, ...[3, 4]];
console.log(arr);

// REST , because on Left side of =
const [x, y, ...others] = [1, 2, 3, 4, 5, 6, 7]; // ...others : the rest of others
console.log(x, y, "others:", others);
// The REST Pattern basically collects the elements that are unused in the destructuring assignment

const [pizza, , risotto, ...otherFood] = [
  ...resturant.mainMenu,
  ...resturant.starterMenu,
];
// It didn't include any skipped elements
// For that reason , the REST should be in the last in the destructuring assignment , because how would JS know until when should collect the rest of the array.
console.log(pizza, risotto, otherFood);

// for Objects:

const { sat, ...weekdays } = resturant.openingHours;
console.log(sat, weekdays);

// Functions:

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }
  console.log(sum);
  console.log(numbers.length);
};

add(1, 23, 4, 5);
add(2, 4);

const a = [23, 5, 7];
add(...a);

// orderpizza method:
resturant.orderPizza("mushrooms", "onion,olives", "spinach");

resturant.orderPizza("mushrooms");

/*
--> Let's recap the this lecture:

-> The spread and the REST both looks exactly the same but they work in opposite ways depending on where they are used.

-> The spread operator is used , where we would otherwise write values , separated by comma.

-> The REST pattern is used , where we would otherwise write variables names separated by commas.

-> The REST pattern can be used where we would write variable names , separated by commas and not values separated by commas
*/
