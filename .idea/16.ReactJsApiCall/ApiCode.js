function Api(props) {
    console.log("Api called")

    // fetch("https://reqres.in/api/users/2")
    //     .then(response=>response.json())
    //     .then(data=> console.log(data))

    var obj;

    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(res => res.json())
        .then(data => obj = data)
        .then(() => console.log(obj))


    return(
        <h1> Hello World{obj.toString()}</h1>
    );
}