var cars = ["Saab", "Volvo", "BMW"];
console.log(cars[1]);  //prints Volvo
console.log(cars.length);
console.log(cars.sort());


//Iteration using foreach
cars.forEach(printFunction);
var txt=""
function printFunction(value,index,array) {
txt=txt+value
}

console.log(txt)



//Iteration using Map
var names=""
cars.map(mapFunction);
function mapFunction(value, index, array) {
    names=names+value;
}
console.log(names)


//Filter in an Set of Data
var numbers = [45, 4, 9, 16, 25];
var over18 = numbers.filter(myFunction);

function myFunction(value, index, array) {
    return value > 18;
}
console.log(over18)