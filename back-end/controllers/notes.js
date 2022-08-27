const Notes = require('../models/notesModel');

//Fetch the notes of the user
exports.getMyNotes = async(req, res)=>{
    try{
        const myNotes = await Notes.find();
        res.status(200).json(myNotes);
    }catch(error){
        res.status(500).json({message:error.message});
    }
}

//Delete a selected note
exports.deleteNote = async (req, res)=>{
    const noteId = req.params.id;
    try{
        await Notes.findByIdAndDelete(noteId);
        res.status(200).json('Deleted the note successfully');
    }catch(error){
        res.status(500).json({message:error.message});
    }
}

//Edit a single note
exports.editNote = async (req, res)=>{
    const noteId = req.params.id;
    const {title, description} = req.body;
    const newData = {
        title,
        description
    }
    try{
        const editedNote = await Notes.findByIdAndUpdate(noteId, newData);
        res.status(200).json('Updated note info successfully');
    }catch(error){
        res.status(500).json({message: error.message});
    }
}

//Create a new note
exports.createNote = async (req, res)=>{
    const { title, description } = req.body;
    const newNote = new Notes({
        title,
        description
    })
    try{
        await newNote.save();
        res.status(200).json('A note has been added successfully');
    }catch(error){
        res.status(500).json({message: error.message});
    }
}