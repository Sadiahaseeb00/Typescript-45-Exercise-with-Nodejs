// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// Question # 24


// test 1
// Tests for equality and inequality with strings
console.log("\nString comparisons test:");
let myName1 : string = "Uzma";
let myName2 : string = "Hira";

console.log("Equality checking:", myName1 === myName2);// false
console.log("Inequality checking:", myName1 !== myName2);// true

// test 2
// Tests using the lower case function
console.log("\nLowercase function test:");
let upperCase : string = "HONDA";
let lowerCase : string = "honda";

console.log("Is lowerCase:", upperCase.toLowerCase() === lowerCase);// true
console.log("Is lowerCase:", upperCase === lowerCase);// false

// test 3
// Numerical tests & greater than and less than
console.log("\nNumerical test, greater and less than, greater or equal, less or equal:");
let num1 : number = 10;
let num2 : number = 4;

console.log("Is equal to:", num1 === num2);//false
console.log("Is not equal to:", num1 !== num2);//true
console.log("Is greater than:", num1 > num2);// true
console.log("Is less than:", num1 < num2);//false
console.log("Is greater than or equal to:", num1 >= num2);// true
console.log("Is less than or equal to:", num1 <= num2);//false

// test 4
// Tests using "and" and "or" operators
console.log("\nLogical 'AND' and 'OR' test:");
let x : number = 10;
let y : number = 25;
let z : number = 100;

console.log("Is && operators:", x < y && y < z);// true
console.log("Is || operators:", x > y || y < z);// true
console.log("Is && operators:", x !== y && y === z);// false

// test 5
// Test whether an item is in a array
console.log("\nArray Inclusion test:");
let Cities : string[] = ["Karachi", "Lahore", "Faisalabad", "Multan"];
console.log("Is Lahore include in my cities array:", Cities.includes("Lahore"));// true   //we can use indexOf method 

// test 6
//  Test whether an item is not in a array
console.log("\nArray Exclusion test:");
console.log("Is Multan not include in my cities array:", !Cities.includes("Multan"));// false   //we can use indexOf method 