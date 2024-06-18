"use strict";
// Question 12: Greetings: Use the array from Exercise 11. Instead of just printing each
// person’s name, print a message to them. The message should be the same for each person,
// but personalized with their name.
Object.defineProperty(exports, "__esModule", { value: true });
// Explain & TIP: This builds on the previous exercise. Now, you’re not just listing names,
//  you’re using them in a sentence to make a personalized message for each friend.
let names = ['Amna', 'Abeera', 'Mirha'];
for (let name of names) {
    console.log(`Hello ${name}`);
}
