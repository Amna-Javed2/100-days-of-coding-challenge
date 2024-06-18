// Question 15: Changing Guest List: One of your guests can't make it to the dinner,
// so you need to send out a new set of invitations with a replacement guest.

// Explain & TIP: Arrays are flexible. You can replace an item if someone can't make it,
//  then loop through the list again for new invitations.


// import guests from "../Question2";   
let guests : string[] = ['Amna','Noor','Abeera']; 

// line no 8 likhen ya 9 ans same rhy ga


let unableToAttend = "Abeera";
console.log(`${unableToAttend} can't make it to dinner.`);

// Replace the guest
let newGuest = "Mirha";
guests[guests.indexOf(unableToAttend)] = newGuest;

// New invitations
guests.forEach(guest => {
    console.log(`Dear ${guest}, you are invited to dinner!`);
});


