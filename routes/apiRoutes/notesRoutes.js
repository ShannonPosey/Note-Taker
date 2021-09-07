const router = require('express').Router();
const { notes } = require('../../Develop/db/db.json')
const { v4: uuidv4 } = require('uuid');
const { createContext } = require('vm');
const { createNote, editNote, findById } = require('../../lib/notes');
const { isRegExp } = require('util');

router.get('/notes', (req, res) => {
    console.log(notes)
    res.json(notes)
});

router.get('/notes/:id', (req, res) => {
    const result = findById(req.params.id, notes);
    if (result) {
        res.json(result)
    } else {
        res.sendStatus(404);
    }
})

router.post('/notes', (req, res) => {
    if (!req.body.id) {
        req.body.id = uuidv4();
        createNote(req.body, notes);
    } else {
        editNote(req.body, notes);
    }
    res.json(req.body)
})



module.exports = router;