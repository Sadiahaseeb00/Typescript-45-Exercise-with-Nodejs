// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

// Question # 23
// test 1
let car = 'toyota';
console.log("\nIs car == 'toyota'? I predict true.");
console.log(car == 'toyota');

// test 2
console.log("\nIs car == 'Ferrari'? I predict false.");
console.log(car == 'Ferrari');

//test 3 
console.log("\nIs car === 'toyota'? I predict true.");
console.log(car === 'toyota');

//test 4 
console.log("\nIs car === 'toyota'? I predict false.");// wrong perdiction
console.log(car === 'toyota');

// test 5
console.log("\nIs car.length > 0? I predict true.");
console.log(car.length > 0);

// test 6
console.log("\nIs car.length < 5? I predict false.");
console.log(car.length < 5);

// test 7
console.log("\nIs car.toUpperCase() === 'TOYOTA'? I predict true.");
console.log(car.toUpperCase() === 'TOYOTA');

// test 8
console.log("\nIs car.toUpperCase() === 'toyota'? I predict true.");// wrong perdiction
console.log(car.toUpperCase() === 'toyota');

// test 9
console.log("\nIs car.toLowerCase() === 'TOYOTA'? I predict false.");
console.log(car.toLowerCase() === 'TOYOTA');

// test 10
console.log("\nIs car === 'Toyota'? I predict false.");
console.log(car === 'Toyota');