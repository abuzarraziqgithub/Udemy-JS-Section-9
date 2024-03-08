"use strict";
/*

-> To know about which data structure to use , let's dive into the pros and cons of all four 4 data strucurs;

-> Let's talk about data first , how data is come from:

1-> From the program itself : Data written directly in source code (eg. status messeges.)

2-> From the UI : Data input from the user or data written in DOM (e.g tasks in todo app).

3-> From external sources : Data fetched for example from web API (e.g. recipe objects.)

-> No matter where the data comes from and what kind of data it is , we usally always have collection of data.

-> we store that  collection data in data structures.

-> we have 4 types of data structures in javascript.

-> we store data according to the format of data.

---------> For simple Lists , we use Arrays or Sets.
                                      -> This data will be the data   without description.

---------> For the data , that uses Key/Value Pairs , we would need Objects or Maps for it.
                      -> Keys allows us to describe values.


//  Example:
            -> let's take an example of web API'S , which is the data from other websites that we are calling.

            -> The Web API data is JSON format , which basically is an object and inside it , there are multiple objects in array(we use this example for recipe API)
            -> This JSON formated data will contain Key value pairs etc.


-> There are other built-in data structures : WeakMap , WeakSet.
-> There are also Non-Built-in data structures like: Stacks , Quenes, Linked lists , Trees , Hash tables. 



---------------> Now we want to know , when to use each data structure for storing the data:
 


-----1) Arrays:
a) Use when you need ordered list of values (might contain duplicates).
b) Use when you need to manipulate data.


-----2) Sets:
a) Use when you need to work with unique values.
b) use when high-performance is really important.
c) use to remove duplicates from arrays.


----3) Objects:
a) More traditional key/value store('abused' objects).
b)Easier to write and access values with . and [].

c) Use when you need to include functions(methods).
d) Use when working with JSON (can convert to map).


----4) Maps:
a) Better Performance .
b) Key can have any data type.
c) Easy to iterate
d) Easy to compute size.

e) Use when you simply need to map key to values.
f) Use when you need keys that are not strings.

*/
