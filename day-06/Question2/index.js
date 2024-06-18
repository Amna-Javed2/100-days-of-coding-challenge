"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*Question 17: Shrinking Guest List: Unfortunately, your new table won’t arrive in time, and you can only invite two guests.

Explain & TIP: Sometimes plans change, and you'll need to adjust your guest list. Removing guests from your list is straightforward
 but should be done thoughtfully*/
let guests = ['Fatima', 'Amna', 'Farzana', 'Noor', 'Mirha', 'Jannat'];
console.log("Unfortunately, I can only invite two people for dinner.");
// four guest nikalny
while (guests.length > 2) {
    let removedGuest = guests.pop();
    console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
}
// two still invited
guests.forEach(guest => {
    console.log(`Dear ${guest}, you're still invited to dinner.`);
});
guests.splice(0, guests.length);
console.log(guests);
