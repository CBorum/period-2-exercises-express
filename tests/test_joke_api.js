/**
 * Created by ChristopherBorum on 08/09/16.
 */
var request  = require("request");

var options = {
    url: "http://localhost:3000/api/joke",
    method: "POST",
    json : true,
    body : {joke : "I'm a joke"}
}

var options2 = {
    url: "http://localhost:3000/api/jokes",
    method: "GET"
}

request(options,function(error,res,body){
    if (error) {
        console.log(error)
    }
    console.log(res.body)
    console.log(body.joke); //Assume the service returns the new Joke
})