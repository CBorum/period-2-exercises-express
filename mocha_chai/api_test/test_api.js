var request = require("request");
var expect = require("chai").expect;
var http = require("http");
var port = 3000

// before(function(done){
//     //start the server
// })
// after(function(done){
//     done();
// })
describe("POST: /api/joke ", function () {
    var options = {
        url: "http://localhost:" + port + "/api/joke", method: "POST",
        json: true,
        body: {joke: "Its better to be late than to arrive ugly"}
    }
    it("should get a random joke", function (done) { request(options, function (error, res, body) {
        var addedJoke = body.joke;
        expect(addedJoke).to.be.equal("Its better to be late than to arrive ugly");
        done()
    }); })
});