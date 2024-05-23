// Question 3: Name Cases: Store a person’s name in a variable, and then print that person’s
// name in lowercase, uppercase, and titlecase.

// Explain & TIP: Save a name in a variable. Show it in all small letters, ALL BIG LETTERS, 
// and First Letter Big for each word. This helps learn how to change text style.

let F_Name = "Amna";

// small letters ke liye 
let lowercase = F_Name.toLowerCase();
console.log(lowercase);

// big letter ke liye
let uppercase = F_Name.toUpperCase();
console.log(uppercase);

// first alphabet big or baki small ke liye
let name1 = F_Name.charAt(0).toUpperCase() + F_Name.slice(1).toLowerCase();
console.log(name1);