/**
 * Created by ChristopherBorum on 07/09/16.
 */
var express = require('express')

var app = express()

app.use('/api/calculator/:operation/:n1/:n2', (req, res, next) => {
    var calculatorRequest = {
        operation: req.params.operation,
        n1: Number(req.params.n1),
        n2: Number(req.params.n2)
    }
    req.calcReq = calculatorRequest
    next()
})

app.get('/api/calculator/*',(req, res) => {
    switch (req.calcReq.operation) {
        case "add":
            var answ = eval(req.calcReq.n1 + req.calcReq.n2)
            res.end(answ.toString())
        default:
            res.end("?")
    }
    console.log(req.calcReq)
})

app.listen(3000, () => {
    console.log('server started on 3000')
})

