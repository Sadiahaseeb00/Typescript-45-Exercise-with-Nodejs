// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// Question # 34

// Creating an Array
let Pizzas : string[] = ["BBQ Chicken", "Cheese", "Pepperoni"];

// using for loop
for (let i = 0; i < Pizzas.length; i++) {
    const pizza = Pizzas[i];
    console.log(`I like ${pizza} pizza.`);

}
// print a message outside of a loop
console.log("I really love pizza!");
