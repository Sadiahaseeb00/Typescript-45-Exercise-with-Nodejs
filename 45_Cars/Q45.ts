// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
// Question # 45

// define a function carInfo with rest parameters
function car_Info(manufacturer: string, modelname: string, ...options: {[key : string]:any}[]) {
    // define object 
    const car = {
    manufacturer: manufacturer,
    modelname: modelname,
    ...Object.assign({}, ...options)
    }
    return car;
};

// call a function and store in variable
let my_car = car_Info('Honda', 'Civic', {color: "black"}, {features:['navigation','power stearing']});

console.log(my_car);

