var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var request = new XMLHttpRequest()

request.open('GET', 'https://reqres.in/api/users/2', true)

request.onload = function() {
    // Begin accessing JSON data here
    var data = JSON.parse(this.responseText)
    console.log(data) //gives ata...
}

request.send()