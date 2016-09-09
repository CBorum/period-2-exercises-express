var express = require('express');
var router = express.Router();
var jokes = require('../model/jokes')

/* GET users listing. */
router.get('/joke/random', function(req, res, next) {
    res.end(JSON.stringify({
        joke: jokes.getRandomJoke()
    }))
});

router.get('/jokes', (req, res, next) => {
    res.end(JSON.stringify({
        joke: jokes.allJokes
    }))
})

router.post('/joke', (req, res, next) => {
    console.log(req.body)
    console.log(req.body.joke)
    jokes.addJoke(req.body.joke)
    res.end(JSON.stringify({
        joke: req.body.joke
    }))
})

module.exports = router;