const note = require('express').Router();

const { readFromFile,
    readAndAppend,
    writeToFile, 
} = require('../helpers/fsUtils');

//Get Route for note

note.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

//Get route for specific note

note.get('/:note_title', (req, res) => {
    const noteTitle = req.params.note_title;
    readFromFile('./db/db.json')
        .then((data) => JSON.parse(data))
        .then((json) => {
            const result = json.filter((note) => note.note_title = noteTitle);
            return result.length > 0
                ? res.json(result)
                : res.json('No note with that title');

        });
});

//Post Route for note

note.post('/', (req, res) => {
    console.log(req.body);

    const { title, text } = req.body;

    if (req.body) {
        const newNote = {
            title,
            text,
        };

        readAndAppend(newNote, './db/db.json');
        res.json(`Note added successfully!`); 
    } else {
    res.error('Error in adding note');
    }
});

module.exports = note;

