"use strict";
// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
Object.defineProperty(exports, "__esModule", { value: true });
// Question # 36
// make a function 
function make_shirt(size, message) {
    console.log(`\nMaking a ${size} size t-shirt with the message "${message}" printed on it.`);
}
// call the function
make_shirt("medium", "Code is life");
make_shirt("large", "keep coding");
