"use strict";
/*
-> In the past , we had only 2 types of data structures which are Arrays(ordered) and Objects.
-> Now in ES6 ,we have 2 more data stuctures which are Sets and maps.

-> Set: It is just a collection of unique values.
-> sets cannot be duplicated because it has unique values.

*/

const ordersSet = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Risotto",
  "Pasta",
  "Pasta",
]);
console.log(ordersSet);
// It will be the set of three values only , beacuse we just said that , in set the values are unique and not duplicate. so It just removed the duplicate values here .
// It's also like Array, because we don't write any keys to values.
// Just like array , Sets are also Iterables.
// The order of elements in the set is irrelevant.
//  Strings are alo iterables.

console.log(new Set("Abuzar RaziQ"));

// We can check the size of set:
console.log(ordersSet.size); //3

// we can check if element is present or not:
console.log(ordersSet.has("Pizza")); //true
// This has method is just like includes method in arrays.
console.log(ordersSet.has("Bread")); //false

//  we can add elements:
ordersSet.add("Garlic Bread");
// we can delete elements:
ordersSet.delete("Risotto");
console.log(ordersSet);

// we can't get an element out of set like we get in arrays.
// because we just said that , the elements order in a set doesn't matter.
// Actually we don't need to get an element from set .
// There all values are unique
// If your goal is to store the values in order and also want to retrieve it , then the best use is array.

// we can also loop over sets , just like arrays, because it is iterabe.

for (const order of ordersSet) console.log(order);

// Example:
const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];
// we have an array of staff , where we write different  staff positions .

// Now we want to only know just the positions:
// we can do that simply by set.
let staffUnique = new Set(staff);
console.log(staffUnique);

// If we want to make an array where every element is separated by commas, we can do that as well , beacuse we will use the Spread Operator for that.
// we can use the spread operator , like we did for arrays.

staffUnique = [...new Set(staff)];
console.log(staffUnique);
//  we can upack this above entire set .
// we can also count the length of an array or string:

staffUnique = new Set(["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"])
  .size;
console.log(staffUnique); // 3 , beacuse it only count unique values , and you knew it.

// For string:
console.log(new Set("Hello").size); //4

/*
Conclusion:

-> Sets are not intended to replace arrays at all .

-> whenever you need to store values in order and that might contain duplicates , always use arrays.

-> When you need to manipulate data  , beacuse arrays have access of great array methods.

-> Set has a very  useful property of being unique.

*/
