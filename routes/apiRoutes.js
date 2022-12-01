/* const express = require('express');

const noteRouter = require('./noteRoutes');

const app = express();

app.use('/note', noteRouter);

module.exports = app;
 */




































/* const api = require('express').Router();
const { readAndAppend, readFromFile } = require('../helpers/fsUtils');


// Getting the data from the db.json file
api.get('/', (req, res) => 
    readFromFile(`./db/db.json`).then((data) => res.json(JSON.parse(data)))
);

//Posting the information for the new notes
api.post('/', (req, res) => {
    const { title, text } = req.body;

    if (title && text) {
        const newNote = {
            title,
            text
        };
    
        readAndAppend(newNote, './db/db.json');

        const response = {
            status: 'success',
            body: newNote,
        };

        res.json(response);
    } else {
        res.json('Error in posting note');
    }

});

module.exports = api; */