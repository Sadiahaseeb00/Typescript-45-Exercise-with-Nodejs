//Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

// Question # 13

let transportationModes: string[] = ["Car", "Motor Cycle", "Bicycle", "Taxi"];  // store transportation modes in own array

transportationModes.forEach(mode => {
    console.log(`I would like to own a ${mode}.`);  // print series of statements
});
