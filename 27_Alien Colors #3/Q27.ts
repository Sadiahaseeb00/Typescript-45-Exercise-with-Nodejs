// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.

// Question # 27

// version 1
// Runs for green color
//  If the alien is green, print a message that the player earned 5 points.
let alien_color1 : string = "green";

if (alien_color1 === "green") {
    console.log("The alien color is green\n player earned 5 points.\n");
    // If the alien is yellow, print a message that the player earned 10 points.
} else if (alien_color1 === "yellow") {
    console.log("The alien color is yellow\n player earned 10 points.");
    // If the alien is red, print a message that the player earned 15 points.
} else if (alien_color1 === "red") {
    console.log("The alien color is red\n player earned 15 points.");
    
} else {
    console.log("Invalied alien color.");
    
}

// version 2
// Runs for yellow color
//  If the alien is yellow, print a message that the player earned 10 points.
let alien_color2 : string = "yellow";

if (alien_color2 === "green") {
    console.log("The alien color is green\n player earned 5 points.");

    // If the alien is yellow, print a message that the player earned 10 points.
} else if (alien_color2 === "yellow") {
    console.log("The alien color is yellow\n player earned 10 points.\n");

    // If the alien is red, print a message that the player earned 15 points.
} else if (alien_color2 === "red") {
    console.log("The alien color is red\n player earned 15 points.");
    
} else {
    console.log("Invalied alien color.");
    
}


// version 3
// Runs for red color
//  If the alien is red, print a message that the player earned 15 points.
let alien_color3 : string = "red";

if (alien_color3 === "green") {
    console.log("The alien color is green\n player earned 5 points.");

    // If the alien is yellow, print a message that the player earned 10 points.
} else if (alien_color3 === "yellow") {
    console.log("The alien color is yellow\n player earned 10 points.");
    
    // If the alien is red, print a message that the player earned 15 points.
} else if (alien_color3 === "red") {
    console.log("The alien color is red\n player earned 15 points.\n");
    
} else {
    console.log("Invalied alien color.");
    
}