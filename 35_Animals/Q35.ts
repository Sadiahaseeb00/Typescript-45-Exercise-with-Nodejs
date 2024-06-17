// Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
// Question # 35

// Creating a Array
let pet_Animals : string[] = ["dog", "cat", "rabbit"];

// using for loop
for (let i = 0; i < pet_Animals.length; i++) {
    console.log(`A ${pet_Animals[i]} would make a great pet.`);
    
}
// print a message out side of loop
console.log("Any of these animals would make a great pet!");
