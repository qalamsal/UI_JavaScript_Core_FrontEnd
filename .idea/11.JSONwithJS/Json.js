/*
JSON: JavaScript Object Notation.

JSON is text, written with JavaScript object notation.

JS Object to JSON format (stringify())
-----------------------
var myObj = {name: "John", age: 31, city: "New York"};
var myJSON = JSON.stringify(myObj);

 */

var myObj = {name: "John", age: 31, city: "New York"};
console.log(myObj)  // { name: 'John', age: 31, city: 'New York' }

var myJSON = JSON.stringify(myObj);
console.log(myJSON) //{"name":"John","age":31,"city":"New York"}

/*JSON to JS Object */
var myJSON = '{"name":"John", "age":31, "city":"New York"}';
var myObj = JSON.parse(myJSON);



/* JSON Syntax
JSON syntax is derived from JavaScript object notation syntax:

Data is in name/value pairs
Data is separated by commas
Curly braces hold objects
Square brackets hold arrays

 */

/*JSON names require double quotes. JavaScript names don't.*/
//JSON must have key as string

//JSON is parsed into a ready-to-use JavaScript object.
//JSON: { "name":"John" }
//Jscript {name:'john'}


//VALID JSON DATA
/*
JSON, values must be one of the following data types:

a string
a number
an object (JSON object)
an array
a boolean
null


In-valid data in JSON
JSON values cannot be one of the following data types:

a function
a date
undefined

 */

//SAMPLE JSON
//{ "name":"John" } //string
//{ "age":30 } //number

//Object
{
 //   "employee":{ "name":"John", "age":30, "city":"New York" }
}

//JSON arrays
{
   // "employees":[ "John", "Anna", "Peter" ]
}

//JSON boolean
//{ "sale":true }


//JSON Null
//{ "middlename":null }