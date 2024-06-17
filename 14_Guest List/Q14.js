// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
// Question # 14
var guests = ["Rashid", "Imran", "Uzma"]; // guestslist 3 guests
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, "\uD83D\uDE0A, would you like to dinner with me?")); // invite message print
});
