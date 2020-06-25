//ES6, also known as ECMAScript2015, introduced classes.


//A class is a type of function,
// but instead of using the keyword function to initiate it,
// we use the keyword class, and the properties are assigned inside a constructor() method.

//Object, will have getter, setter,

//Class must be declared, before used (hoisted)

class Car {
    constructor(brand) {
        this.carname = brand;
    }

    present() {
        return "I have a " + this.carname;
    }

}
mycar = new Car("Ford");
console.log(mycar.carname)
console.log(mycar.present())


