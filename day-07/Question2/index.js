"use strict";
/*Question 20 Think of something you could store in a array.
For example, you could make a list of mountains, rivers, countries,
cities, languages, or anything else you’d like. Write a program that creates a list containing these items.*/
Object.defineProperty(exports, "__esModule", { value: true });
let books = ["Physics", "Math", "Computer"];
// console.log(`Books I'd like to read, ${books}.`);     // combine
books.forEach(book => {
    console.log(`Book I'd like to read, ${book}.`); // separate
});
