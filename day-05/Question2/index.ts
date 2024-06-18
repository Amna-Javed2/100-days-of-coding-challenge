// Question 14: Guest List: If you could invite anyone, living or deceased,
// to dinner, who would you invite? Make a list that includes at least three
// people you’d like to invite to dinner. Then use your list to print a message
// to each person, inviting them to dinner.

// Explain & TIP: Just like with transportation, you can use an array to manage
//  a list of guests. Loop through the list to send each one a personal invitation

let guests : string[] = ['Amna','Noor','Abeera'];
guests.forEach(guest => {
    console.log(`Dear ${guest}, you are invited to dinner!`);
})

export default guests;
// extra 

// for (let i = 0; i < guests.length; i++) {
//     console.log(`Dear ${guests[i]}, you are invited to dinner!`);
//     }

