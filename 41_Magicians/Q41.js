"use strict";
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
Object.defineProperty(exports, "__esModule", { value: true });
// Question # 41
// creat of an array magicians names
let magiciansName = ["Harry Houdini", "Doug Henning", "Criss Angel"];
// creat a function
function show_magicians(magiciansName) {
    magiciansName.forEach(magician => {
        console.log(magician);
    });
}
// call the function
show_magicians(magiciansName);
