const express = require('express');

const db = require('./data/db.js');

const server = express();

server.use(express.json());

///endpoints go here

//GET Players

server
    .get('/players', (req, res) => {
        db('players')
            .then(player => {
                res.status(200).json(player)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    })

//GET Coaches

server
    .get('/coaches', (req, res) => {
        db('coaches')
            .then(coach => {
                res.status(200).json(coach)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    })

//GET Games

server
    .get('/games', (req, res) => {
        db('games')
            .then(game => {
                res.status(200).json(game)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    })

//GET News

server 
    .get('/news', (req, res) => {
        db('news')
            .then(news => {
                res.status(200).json(news)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    })
////////////////////////////////////////////

//POST Player

server 
    .post('/players', (req, res) => {
        const { name, position, grade, jersey } = req.body;
        if (!name || !position || !grade || !jersey) {
            res.status(400).json({ errorMessage: "Please provide a name, position, grade and jersey number"})
        }
        db
            .insert({ name, position, grade, jersey })
            .into('players')
            .then(player => {
                res.status(201).json(req.body)
            })
            .catch(err => {
                res.status(400).json({ error: "Error Saving Player"})
            })
    })

//POST Coach

server
    .post('/coaches', (req, res) => {
        const { name, position, education, years } = req.body;
        if (!name || !position || !education || !years) {
            res.status(400).json({ errorMessage: "Please provide a name, position, education and years" })
        }
        db
            .insert({ name, position, education, years })
            .into('coaches')
            .then(coach => {
                res.status(201).json(req.body)
            })
            .catch(err => {
                res.status(400).json({ error: "Error Saving Coach" })
            })
    })

const port = 3300;
server.listen(port, function() {
 console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});
