"use strict";
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
// Question # 37
Object.defineProperty(exports, "__esModule", { value: true });
// function to Create a T-shirt with default values
function make_shirt(size = "large", message = "I love TypeScript") {
    console.log(`Making a ${size} size t-shirt with the message "${message}" printed on it.`);
}
// call the function
make_shirt(); // default large and message
make_shirt("medium"); // default message, medium size
make_shirt("small", "Dive into coding"); // custom message, small size
