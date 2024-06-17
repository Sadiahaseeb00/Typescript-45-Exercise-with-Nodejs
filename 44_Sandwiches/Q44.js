"use strict";
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
// Question # 44
Object.defineProperty(exports, "__esModule", { value: true });
// define a function with rest params
function make_sandwich(...items) {
    console.log(`\nMaking a sandwich with:\n ${items.join(', ')}.`);
}
// call the function 3 times with different aurguement
make_sandwich("bread", "butter", "chicken");
make_sandwich("bread", "onion", "tomato", "cucumber", "beef");
make_sandwich("bread", "mayo", "cheese", "lettuce", "ketchup", "egg");
