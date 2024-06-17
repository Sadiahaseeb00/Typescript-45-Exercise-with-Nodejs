"use strict";
// Unchanged Magicians: Start with your work from Exercise 42. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
Object.defineProperty(exports, "__esModule", { value: true });
// Question # 43
// creat of an array magicians names
let magiciansName = ["Harry Houdini", "Doug Henning", "Criss Angel"];
// define a function show magicians names
function show_magicians(magicians) {
    magicians.forEach((name) => console.log(name));
}
// define a function to add "the great" to each magicians names
function make_great(magicians) {
    return magicians.map((name) => `The Great ${name}`);
}
// making a copy of original array through .slice() function
let copy_magician_names = magiciansName.slice();
// modofied the copy array "the great"  with their names
let great_magicians_names = make_great(copy_magician_names);
// call the both function original and copy
console.log("\nOriginal magicians:");
show_magicians(magiciansName); // shows the original names
console.log("\nGreat magicians:");
show_magicians(great_magicians_names); // shows the modified names
