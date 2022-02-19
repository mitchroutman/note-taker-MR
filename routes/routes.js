const fs = require('fs');
const router = require('express').Router()
const path = require('path');
const { v4: uuidv4 } = require('uuid');

//api/notes get
router.get('/notes', function(req, res) {
    fs.readFile(path.join(__dirname, '../db/db.json'), (err, data) => {
        const notes = JSON.parse(data)
        res.json(notes);
    })
})

router.post('/notes', function(req, res) {
    fs.readFile(path.join(__dirname, '../db/db.json'), (err, data) => {
        const notes = JSON.parse(data);
        let newNote = req.body;
        newNote.id = uuidv4();

        notes.push(req.body);

        fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(notes), (err) => {
            if (err) throw err;
            res.json("added new info");
        })
    })
})

router.delete("/api/notes/:id", function(req, res) {
    notes.splice(req.params.id, 1);
    console.log("Deleted note with id "+req.params.id);
});

module.exports = router;