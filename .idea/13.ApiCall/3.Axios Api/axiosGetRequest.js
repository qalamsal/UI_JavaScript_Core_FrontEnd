const axios = require("axios");
axios.get("https://reqres.in/api/users/2")
    .then(response=>{
        console.log(response.data)
    })
    .catch(error=>console.log(error))



//https://reqres.in/api/users/2
//why axios
//Axios performs automatic transformations and returns the data in JSON format.
  //  Better error handling
//Axios has a wide range of supported browsers.