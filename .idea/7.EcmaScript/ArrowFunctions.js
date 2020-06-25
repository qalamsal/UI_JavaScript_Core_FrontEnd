//without Arrow function
 hello = function() {
    return "Hello World!";
}

console.log(hello)   //print function name hell
console.log(hello()) //will print hello world


//With Arrow function
hello = () => {   //function() is replace by ()=>, for single statement
    return "Hello World!";
}
console.log(hello())


//Arrow function with paramenter

hai =(name)=>{
    return "hai ::"+name;
}
console.log(hai("sandesh"))  //print hai sandesh


//this with Arrow function
//this keyword always represents the object that defined the arrow function.
//not the object that called the function


