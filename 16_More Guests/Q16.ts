// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
// Question # 16

// Start with a Exercise 15.
let guests: string[] = ["Rashid", "Imran", "Fatima"];

//printing a statement informing people about bigger dinner table.
console.log(" Great news!\n I found a bigger dinner table!😀\n");

// Adding more guest to the beginning
guests.unshift("Merab");

// Adding more guest to the middle
guests.splice(2,0, "Zoha");

//Adding more guest to the end
guests.push("Rubaisha");

//printing a new invitation message for each person.
guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
    
});
