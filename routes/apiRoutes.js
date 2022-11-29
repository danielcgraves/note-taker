const api = require('express').Router();
const { readAndAppend, readFromFile } = require('../helpers/fsUtils');


// Getting the data from the db.json file
api.get('/', (req, res) => 
    readFromFile(`./db.json`).then((data) => res.json(JSON.parse(data)))
);

//Posting the information for the new notes
api.post('/', (req, res) => {
    const { title, text } = req.body;

    if (title && text) {
        const newNote = {
            title,
            text
        };
    
        readAndAppend(newNote, './db.json');

        const response = {
            status: 'success',
            body: newNote,
        };

        res.json(response);
    } else {
        res.json('Error in posing note');
    }

});

