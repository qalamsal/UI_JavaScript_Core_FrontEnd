const fetch = require("node-fetch");
async function getUsers(){

    let response=await fetch("https://reqres.in/api/users/2");
    let data=await response.json()
    return data;
}
getUsers().then(data=>console.log(data));
