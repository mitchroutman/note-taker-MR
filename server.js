const { json, application } = require('express');
const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.port || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.get('/', (req, res) => 
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.get('*', (req, res) => 
    res.send('/public/404')
);

app.listen(PORT, function() {
    console.log('Listening on port: ' + PORT);
});

