/*Question 16: More Guests: You've found a bigger dinner table, so there's room for more guests.

Explain & TIP: When you have more space, you can add more guests to your list. You can add guests 
at the beginning, middle, and end of an array.*/

let guests : string[] = ['Amna','Noor','Mirha']; 
console.log("Great news! I found a bigger dinner table!");

// new guests 

// guest array ke start mei add krna
guests.unshift("Fatima");

// guest array ke mid mei add krna
guests.splice(2,0,"Farzana");
// guests.splice(guests.length /2,0,"Farzana");

// guest array ke end mei add krna
guests.push("Jannat");

console.log(guests);
guests.forEach(guest => {
    console.log(`Hello ${guest}! You are invited to dinner!`);
});