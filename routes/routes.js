const fs = require('fs');
const path = require('path');

//api/notes get
app.get('/api/notes', function(req, res) {
    res.json(notes);
})