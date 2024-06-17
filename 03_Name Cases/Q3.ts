// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

//Assignment # 3

//storing a person name in a variable

let personName: string = "sadia";


//printing a person name in lowercase

console.log(personName.toLowerCase());

//printing a person name in uppercase

console.log(personName.toUpperCase());

//printing a person name in titlecase

console.log(personName.charAt(0).toUpperCase() + personName.slice(1).toLowerCase());