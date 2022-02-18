const express = require('express');
const fs = require('fs');
const path = require('path');
const api = require('./routes/routes')

const app = express();
const PORT = process.env.port || 3001;

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))

//HTML routes
app.get('/', (req, res) =>
res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.get('/notes', (req, res) => 
res.sendFile(path.join(__dirname, '/public/notes.html'))
);

//API routes
app.use('/api', api);

app.get('*', (req, res) => 
    res.send('/public/404.html')
);

//
app.listen(PORT, function() {
    console.log('Listening on port: ' + PORT);
});

