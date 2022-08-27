//Fetch the notes of the user
exports.getMyNotes = (req, res)=>{
    res.send('Send all notes');
}

//Delete a selected note
exports.deleteNote = (req, res)=>{
    res.send('Delete a note');
}

//Edit a single note
exports.editNote = (req, res)=>{
    res.send('Edit a note');
}

//Create a new note
exports.createNote = (req, res)=>{
    res.send('Create a note');
}