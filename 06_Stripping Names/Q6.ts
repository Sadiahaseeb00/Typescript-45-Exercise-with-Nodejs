//Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

//Question # 6

let whitespaceName: string = "\n\t Sadia \t\n";   //storing a person name in a variable with whitespace

console.log("name with whitespace:", whitespaceName);  //printing the name with whitespace

console.log("name without whitespace:", whitespaceName.trim());    //printing the name without whitespace