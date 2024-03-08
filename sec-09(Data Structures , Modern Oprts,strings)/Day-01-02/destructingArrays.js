"use strict";

/*
       "Destructuring is an ES6 feature and it's basically a way of unpacking values from an array or object into separate variables"

       "Its to break a complex data structures down into a smaller data structure like a variable."
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
};

// Let's create an array:
const arr = [2, 3, 4];

// Simple value storing:
const a = arr[0];
const b = arr[1];
const c = arr[2];

// Destructuring :
const [x, y, z] = arr;
console.log(x, y, z); // 2 , 3, 4
console.log(arr); // It won't affect the initial array.

// Now , Let's do it for the resturant object:
let [main, secondary] = resturant.categories; // Italian , Pizzeria
//  If I want to store the 3rd index into second variable :
const [firstIndex, , thirdIndexInSecond] = resturant.categories;
console.log("First Result :", main, secondary); // Italian Pizzeria
console.log("Second Result :", firstIndex, thirdIndexInSecond); // Italian Vegetarian.

// If we want to switch the main into secondary and secondary into main:
// simple wihout using destructuring:

// let temp = main; // Italian
// main = secondary; //  Italian = Pizzeria -> Pizzeria
// secondary = temp; // Pizzeria = Italian  -> Italian
// console.log(temp); // Italian
// console.log(main, secondary); // Pizzeria Italian

// People confused on temp use , let's use only these.
// main = secondary; // Italian = Pizzeria -> Pizzeria
// secondary = main; // Pizzeria = Pizzeria -> Pezzeria
// console.log(main, secondary); // Pizzeria Pezzeria

// Let's do it in easy way using destructuring : The first thing to switch both the values, we need to create an array with two inverted variables.
[secondary, main] = [main, secondary];
console.log(main, secondary); // Pizzeria Italian
// we didn't need a third variable for this.

console.log(resturant.order(1, 0)); // ['Bruschetta' , 'Pizza']

// Now let's start destructuing
const [starter, main0] = resturant.order(1, 0);
console.log(starter, main0); // Bruschetta  Pizza

// What happens if we have a nested array?
// Nested Destructuring
const nestedArray = [2, 4, [5, 3]];
// const [i, , j] = nestedArray;
// console.log(i, j);
// what if we want to get all the individual values?
// we will do destructuring inside the destructuring.
const [i, , [j, k]] = nestedArray;
console.log(i, j, k); // 2 5 3

// Default Values:
let [p, q, r] = [9, 4];
console.log(p, q, r); // 9  4 undefined.
// the position of r will get undefined , but we can actually assign them default values so it will get that default value if the array is not known how shorter it will be.
[p = 1, q = 1, r = 1] = [9, 5];
console.log(p, q, r); // 9 5 1

// That's it for the Destructuring of Array.
