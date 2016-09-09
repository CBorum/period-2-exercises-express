var express = require('express');
var router = express.Router();
var jokes = require('../model/jokes')


/* GET home page. */
router.get('/', (req, res, next) => {
    res.render('index', {
        title: 'Jade jokes',
        username: req.session.username
    });
});

router.get('/login', (req, res, next) => {
    res.render('login', {
        title: 'Login'
    })
})

router.get('/joke', (req, res, next) => {
    if (!req.session.jokehits) {
        req.session.jokehits = 1
    } else {
        req.session.jokehits++
    }
    res.render('joke', {
        title: 'random joke',
        joke: jokes.getRandomJoke()
    })
})

router.get('/jokes', (req, res, next) => {
    if (!req.session.jokeshits) {
        req.session.jokeshits = 1
    } else {
        req.session.jokeshits++
    }
    res.render('jokes', {
        title: 'all jokes',
        jokes: jokes.allJokes
    })
})

router.get('/addjoke', (req, res, next) => {
    res.render('addJoke', {
        title: 'add joke'
    })
})

router.post('/storejoke', (req, res, next) => {
    if (!req.session.storehits) {
        req.session.storehits = 1
    } else {
        req.session.storehits++
    }
    console.log(req.param('jokeString'))
    jokes.addJoke(req.param('jokeString'))
    res.redirect('/addjoke')
})
module.exports = router;
