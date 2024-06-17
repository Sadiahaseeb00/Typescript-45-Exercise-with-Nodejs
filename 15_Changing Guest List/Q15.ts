// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

//• Print a second set of invitation messages, one for each person who is still in your list.
// Question # 15


//Start with Exercise 14 array
let guests: string[] = ["Rashid", "Imran", "Uzma"];  // guestslist 3 guests

guests.forEach(guest => {
    console.log(`Dear ${guest}😊, would you like to dinner with me?`);  // printing invite message 
    
});

//printing a statement name guest who can’t come to the dinner.
let unableGuest:string = "Uzma";
console.log(`\nNote:
${unableGuest} can't come to dinner.\n`);

// replacing the name of the guest who can’t make it with the name of the new person you are inviting. 
let newGuest:string = "Fatima";

guests[2] = newGuest;

// printing a second set of invitation messages for each person
guests.forEach(guest => {
    console.log(`Dear ${guest}😊, would you like to join me for dinner?`);
    
});