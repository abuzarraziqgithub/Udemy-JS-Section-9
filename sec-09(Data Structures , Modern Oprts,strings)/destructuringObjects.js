"use strict";

const resturant = {
  Rname: "Classico Italiano",
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

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = "12:00 PM",
    address = "Dargai",
  }) {
    // as we recieved that object , we do immediately destructuring.
    console.log(
      `Order Recieved! ${this.starterMenu[starterIndex]}  and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}   `
    );
  },
};

resturant.orderDelivery(
  {
    time: "10:30 PM",
    address: "Spinkhak",
    mainIndex: 2,
    starterIndex: 2,
  } // this is only one object , not 4 arguments.
);
resturant.orderDelivery({});
// resturant.orderDelivery(1, 0, "10:30 PM", "SpinKhak"); //Order Recieved! Bruschetta  and Pizza will be delivered to SpinKhak at 10:30 PM

// we used closed braces for arrays in destr.
// Now  In order to do destructuring of an object , we use curlu braces for that , and this also how we create objects.

// we should use the exact property nameshere to extract variables from this object:

// the order of elements in the object doesn't matter.

const { Rname, openingHours, categories } = resturant;
// console.log(Rname, openingHours, categories);
// This is an extremely useful adition to the language , especially when we deal with result of an API call(means to get data from another web application) and this data usually comes in the form of objects.
// It help us to write less code for this.

//  What If we want different names for the property names in the objects:

// we can do it:
const {
  Rname: resturantName,
  //   openingHours: resturantHours,
  categories: foodCategories,
} = resturant;

// console.log(resturantName, resturantHours, foodCategories);

// This should be really helpful when we use third party web app for an API call , we would set a default value for the newly variable or property name if in the case it  doesn't exist:

const { menu = ["Not available"], starterMenu: starters = [] } = resturant;
// console.log(menu, starters);

// Mutating variables while dest objects
// we did it with arrays , when we switching variables.

// Mutating Variables:

let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

// {a,b} = obj;  // we can't do it because javascript will consider it code block and we can't assign it the obj.

// we should do instead:
({ a, b } = obj);
// console.log(a, b); // 23 7
//  we did override a , b initial values into obj values

// Nested Objects:
const {
  fri: { open: o, close: c },
} = openingHours;
// console.log(o, c);

// This is all about destructuring of Objects...
