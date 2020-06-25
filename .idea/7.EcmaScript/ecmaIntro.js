/*
ES2015 introduced 2 new keyword in js
1.let
2. const

before this, we had only Global (out side function) and Function (inside function) scope

*/

//Block scope
{
    var x=2
}
console.log(x)  //now, Before es2015 , we can use var for outside block too

//if with let,

{
    let y=2
}
console.log(y)  //now, after es2015 , using let, can restrict it


//example of var
var x = 10;
// Here x is 10
{
    var x = 2;
    // Here x is 2
}
// Here x is 2


//example of let..
let i = 5;
for (let i = 0; i < 10; i++) {
    // some statements
}
// Here i is 5


//const key word
const PI = 3.14159265359;

