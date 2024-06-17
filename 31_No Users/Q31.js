"use strict";
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
Object.defineProperty(exports, "__esModule", { value: true });
// Question # 31
let userNames = ["Urooba", "Admin", "Kamran", "Noman", "Subhan"];
// Remove all of members in list
userNames = [];
if (userNames.length > 0) {
    // Loop through the array and print greeting to each user
    for (let i = 0; i < userNames.length; i++) {
        const oneUser = userNames[i];
        if (oneUser === "Admin") {
            console.log(`Hello ${oneUser}, would you like to see a status report?\n`);
        }
        else {
            console.log(`Hello ${oneUser}, thank you for logging in again.\n`);
        }
    }
}
else {
    console.log("We need to find some users!");
}
;
