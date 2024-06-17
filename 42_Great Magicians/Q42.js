"use strict";
// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
// Question # 42
Object.defineProperty(exports, "__esModule", { value: true });
// creat of an array magicians names
let magiciansName = ["Harry Houdini", "Doug Henning", "Criss Angel"];
// define a function show magicians names
function show_magicians(magicians) {
    magicians.forEach(name => console.log(name));
}
;
// define a function to add "the great" to each magicians names
function make_great(magicians) {
    return magicians.map(name => `The Great ${name}`);
}
;
// call the function and store the return value in variable
let greatMagicians = make_great(magiciansName); // modifies the original array
//call the function
show_magicians(greatMagicians); // shows modified names
