// implement your API here
// node - how to import/export code between files
// introduce how routing works

// import express from 'express'; //ES2015 modules, export default someCode;
const express = require('express'); //CommonJS modules, module.exports = someCode;
const cors = require('cors');
const db = require('./data/db');

const server = express(); // creates the server

server.use(cors());

server.get('/', (req, res) => {
    // req/res handler
    res.send('<p>Leroy Jenkins!!!</p>')
});

server.get('/api/users', (req, res) => {
    db.find()
        .then((users) => {
            console.log('\n** users **\n', users);
            res.json(users);
        })
        .catch((err) => res.send(err));
});

// watch for traffic on a particular port
const port = 9001;
server.listen(port, () => console.log(`API running on port ${port}`));
