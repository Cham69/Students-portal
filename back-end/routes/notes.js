const express = require ('express');
const { getMyNotes, deleteNote, editNote, createNote } = require('../controllers/notes');
const router = express.Router();

router.get('/', getMyNotes);
router.delete('/delete/:id', deleteNote);
router.put('/edit/:id', editNote);
router.post('/create', createNote);

module.exports = router;