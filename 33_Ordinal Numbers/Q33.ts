// Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// Question # 33
//Creating an Array
let numbers : number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// using for loop
for (let i = 0; i < numbers.length; i++) {
    const Onenumber = numbers[i];
    let ordinalEnding : string;
    if(Onenumber === 1){
        ordinalEnding = "st";
    }else if(Onenumber === 2){
        ordinalEnding = "nd";
    }else if(Onenumber === 3){
        ordinalEnding = "rd";
    }
    else {
        ordinalEnding = "th";
         
    }
    console.log(`${Onenumber}${ordinalEnding}`);
}