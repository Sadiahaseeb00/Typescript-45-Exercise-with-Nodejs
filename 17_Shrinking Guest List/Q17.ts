// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//  Question # 17


// start with Ex: 16 list
let guests: string[] = ["Merab", "Rashid", "Zoha", "Imran", "Fatima", "Rubaisha"]; 

console.log("\nI can only invite two people for dinner.\n");// informing invite only 2 guests 

// printing a message for removedguests
while (guests.length > 2) {
    let removedGuests = guests.pop();
    console.log(`Sorry ${removedGuests}, I can't invite you to dinner.`);
};

// printing a message for remain 2 people
guests.forEach(guest => {
    console.log(`Dear ${guest},\n you're still invited to dinner.`);
    
})//Removing guests in list
guests.splice(0, guests.length);
// showing empty list
console.log("Empty list:",guests);