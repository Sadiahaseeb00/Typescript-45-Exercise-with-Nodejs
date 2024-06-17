// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.

// Question # 32
// Array of Currrent User
let current_users : string[] = ["admin", "imran", "ali", "maryam", "rida"];

// Array of New User
let new_users : string[] = ["Kiran", "Saima", "Imran", "admin", "huma"];

new_users.forEach(newUser => {
    if (current_users.some(currentUser => currentUser.toLowerCase() === newUser.toLowerCase())) {
    console.log(`${newUser} will need to enter a new user name.`);

    }else{
        console.log(`${newUser} is availble.`);
        
    }
});