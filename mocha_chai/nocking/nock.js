var nock = require('nock')

var scope = nock('http://www.example.com')
    .get('/resource')
    .reply(200, 'path matched');