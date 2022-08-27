const express = require ('express');
const { getMyNotes, deleteNote, editNote, createNote } = require('../controllers/notes');
const router = express.Router();

router.get('/', getMyNotes);
router.get('/delete/:id', deleteNote);
router.get('/edit/:id', editNote);
router.post('/create', createNote);

module.exports = router;