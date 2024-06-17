// Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

// Question # 20
// Storing a mountains in a array
let mountainsList:string[] = ["K2", "Nanga Parbat", "Mount Everest", "Makalu", "Kangchenjunga","Lhotse", "Cho Oyu"];

// Printing a heading of list
console.log("List of Mountains:\n");

// Printing the elements of array in the form of list
 mountainsList.forEach(mountain => {
     console.log(mountain);
    
 });