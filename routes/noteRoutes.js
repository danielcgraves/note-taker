const notes = require('express').Router();
const uuid = require('../helpers/uuid');
const { readFromFile,
    readAndAppend,
    writeToFile, 
} = require('../helpers/fsUtils');


//Get Route for notes

notes.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

//Get route for specific notes

notes.get('/:id', (req, res) => {
    console.info(`${req.method} request received to get note ID`)
    const noteId = req.params.id;
    readFromFile('./db/db.json')
        .then((data) => JSON.parse(data))
        .then((json) => {
            const result = json.filter((note) => note.id = noteId);
            return result.length > 0
                ? res.json(result)
                : res.json('No note with that id');
               

        });
});

// DELETE Route for a specific note
notes.delete('/:id', (req, res) => {
    const noteId = req.params.id;
    readFromFile('./db/db.json')
      .then((data) => JSON.parse(data))
      .then((json) => {

        const result = json.filter((note) => note.id !== noteId);
  
        writeToFile('./db/db.json', result);
  
        res.json(`Item ${noteId} has been deleted 🗑️`);
      });
  });


//Post Route for note

notes.post('/', (req, res) => {
    console.log(req.body);

    const { title, text } = req.body;

    if (req.body) {
        const newNote = {
            title,
            text,
            id: uuid(),
        };

        readAndAppend(newNote, './db/db.json');
        res.json(`Note added successfully!`); 
    } else {
    res.error('Error in adding note');
    }
});

module.exports = notes;

