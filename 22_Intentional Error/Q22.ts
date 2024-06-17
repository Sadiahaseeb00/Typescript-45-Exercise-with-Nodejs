// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

// Question # 22
// Index                     0        1       2
let students: string[] = ["Imran", "Amna", "Saba"];

// creating Intentional Error in array
console.log("Intentional Index Error: ",students[3]);// undefined answer because array are zero-indexed, so index 3 is out of bounds.

//Correcting the error by accessing a valid index.
students[1] = "Amna";
console.log("Correcting Index Error: ",students[1]);