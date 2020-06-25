var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var request = new XMLHttpRequest()

request.open('GET', 'https://reqres.in/api/users/2', true)

request.onload = function() {
    // Begin accessing JSON data here
    var d = JSON.parse(this.responseText)
    console.log(d) //gives ata...
    console.log(this.status)  //sucess message, 200

    //this refers to current object, here request, as request.onload is called, the
    //calling object is request for the function..
    if(this.status==200)
        console.log("Message from API is OK")
    else
        console.log("Message is not retrieved from API")
    /*
    {
  data: {
    id: 2,
    email: 'janet.weaver@reqres.in',
    first_name: 'Janet',
    last_name: 'Weaver',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg'
  },
  ad: {
    company: 'StatusCode Weekly',
    url: 'http://statuscode.org/',
    text: 'A weekly newsletter focusing on software development, infrastructure, the server, performance, and the stack end of things.'
  }
}

     */

    //iterate date
    console.log(d.data.email)  //gets email from the data
}

request.send()