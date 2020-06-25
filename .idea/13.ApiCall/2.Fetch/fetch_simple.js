const varFetch = require("node-fetch");
varFetch("https://reqres.in/api/users/2")
    .then(response=>{
        return response.json();
    })
    .then(users=>{
        console.log(users);
    })

//install fetch from npm
//npm i node-fetch --save