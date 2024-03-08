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

// resturant.numGuests = 0;
// const guests1 = resturant.numGuests ? resturant.numGuests : 0;
// console.log(guests1);

// // If the numGuests value is equal to 0 , then it will not work because 0 is falsy value

// // we can use short Circuiting:
// const guests2 = resturant.numGuests || 10;
// console.log(guests2);

// for this problem , the nullish coalescing operator launched in ES2020 ,

// Let's chek how it works:
resturant.numGuests = 0;
const guests = resturant.numGuests || 10;
console.log(guests); // 10

// Nullish : null , undefined (Not include 0 and "")
const guestCorrect = resturant.numGuests ?? 10;
console.log(guestCorrect); //0
// It's because the nullish coalescing operator works with the idea or with the concept of nullish values instead of falsy values
