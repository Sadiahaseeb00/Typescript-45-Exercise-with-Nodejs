// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

// Question # 12

let personsName: string[] = ["Amna", "Sadia", "Kanwal", "Urooj", "Nida"];

personsName.forEach (person => {
    console.log(`Hi, ${person}. Nice to meet you!`); 
});

