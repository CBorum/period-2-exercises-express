var angularAirline = require('./airline');
// var angularAirline = require(..);
var date = new Date("2016-03-09");

angularAirline.getAvailableTickets("SXF",date,4,function(err,response){
    if (err) {
        console.log("error: " + err)
    }
    console.log("resp: " + response);
});