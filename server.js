const express = require('express');
const path = require('path');
const api = require('./routes/noteRoutes.js')

const PORT = 3001;

const app = express();

//Middleware allows the server to interact with the public files

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));

app.use('/api/notes', api);


app.get('/notes', (req, res) => 
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.get('*', (req, res) => 
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.listen(PORT, () => 
    console.log(`App is listening att http://localhost:${PORT}`)
);

