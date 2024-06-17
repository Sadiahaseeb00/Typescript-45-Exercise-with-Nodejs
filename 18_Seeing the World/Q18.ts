// Seeing the World: Think of at least five places in the world you’d like to visit.

// Question # 18

// Storing the locations in array
let placeToVisit: string[] = ["Paris", "New york", "Rome", "Italy", "China"];

// Printing original order
console.log("Original Order:", placeToVisit);

//  Printing array in alphabetical order without modifying the actual list.
console.log("Alphabetical Order:", [...placeToVisit].sort());

//  printing original order 
console.log("Original Order:", placeToVisit);

// Printing array in Reverse alphabetical order without changing the actual list.
console.log("Reverse Alphabetical Order", [...placeToVisit].reverse());

// printing original order 
console.log("Original Order:", placeToVisit);

// Reverse the original order list and printing
console.log("Reversed Original Array:", placeToVisit.reverse());

// Reverse the order of list again. Print the list to show it’s back to its original order
console.log("Back to Original Order:", placeToVisit.reverse());

// Sort array stored in alphabetical order. Print the array to show that its order has been changed.
console.log("Sorted in Alphabetical Order:", placeToVisit.sort());

// Reversed order again
console.log("Original Array Reversed Again:", placeToVisit.reverse());