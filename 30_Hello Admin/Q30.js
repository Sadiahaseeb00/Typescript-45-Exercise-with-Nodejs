// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// Question # 30
var userNames = ["Urooba", "Admin", "Kamran", "Noman", "Subhan"];
// Loop through the array and print greeting to each user
for (var i = 0; i < userNames.length; i++) {
    var oneUser = userNames[i];
    if (oneUser === "Admin") {
        console.log("Hello ".concat(oneUser, ", would you like to see a status report?\n"));
    }
    else {
        console.log("Hello ".concat(oneUser, ", thank you for logging in again.\n"));
    }
}