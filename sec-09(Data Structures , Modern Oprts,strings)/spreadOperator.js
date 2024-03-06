"use strict";

/*
----> We use the Spread Operator to expand an array into all its elements
-> unpacking all the array elements at one.
*/

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

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is Your delicious pasta with ${ing1} ${ing2} and ${ing3}`
    );
  },
};

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);
// Instead of doing this
// we should use the spread operator:
const spreadArr = [1, 2, ...arr];
// console.log(spreadArr);

// whenever we needs the elements of an array individually , we should use the spread operator instead on writing in a manual way.
// console.log(...spreadArr);

// we can also use it , whenever we want to add new food items to the main menu:
const newFood = [...resturant.mainMenu, "Gnocci"];
// and this is not that we are manipulating the existing array , we actuallly created a new array from scratch.
// console.log(newFood);

// copy array:
const mainMenuCopy = [...resturant.mainMenu];
console.log(mainMenuCopy);

// Join(merge) two arrays:
const menu = [...resturant.mainMenu, ...resturant.starterMenu];
console.log(menu);

// The spread operator work on arrays, well that's not true , but instead it worked on so called iterables , which we will learn in the course later.

// we can say that iterables are like arrays, maps ,strings  or sets , but not objects.

// The most of the builtin data structures in javascript are now iterablesbut except objects.

// for strings:
const str = "jhon";
const letters = [...str, "", "s."];
// console.log(letters);
console.log(...str);
console.log("j", "h");

// we can't use it the template literal:
// console.log(`${...arr}`);
// so , multiple values separated by a comma are usually only expected when we pass arguments into a function or when we built a new array.

const ingredients = [
  //   prompt("Let's make pasta! Ingredient 1 ? "),
  //   prompt("Ingredient 2 ?"),
  //   prompt("Ingredient 3 ?"),
];
// console.log(ingredients);

// Real world example.
// let's call the pasta function:
// In older way:
// resturant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);

// now use spread operator:
// resturant.orderPasta(...ingredients);

/*
--> Note: You might have noticed that the spread operator is actually a bit similar to destructuring , because it also help us get elements out of arrays.

Now,the big difference is that the spread operator takes all the elements from the array and it also doesn't create new variables.

we can only use it in places where we would write values separated by commas.


-->  since ES 2018 , the spread operator actually also worked on objects , even though objects are not iterables

*/

// Let's do it with objects:
const newresturant = { foundedIn: 1998, ...resturant, founder: "Guiseppe" };
// console.log(newresturant);

const resturantCopy = { ...resturant };
resturantCopy.name = "Ristorante Roma";
console.log(resturantCopy.name);
console.log(resturant.name);
// we said in the last section , that when we copy an object and wanted to assign a new value to that copy object , it also changed the value in the original one .
// but in this spread operator , something did here.

// we will see it forewards.
