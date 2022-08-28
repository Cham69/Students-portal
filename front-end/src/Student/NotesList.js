import axios from 'axios';
import React, { useEffect, useState } from 'react'

const NotesList = () => {
  const [notes, setNotes] = useState([]);

  useEffect(()=>{
    getAllNotes();
  },[])

  //Getting all notes for a certain user
  const getAllNotes = ()=>{
    axios.get('http://localhost:8000/notes').then(response=>{
      console.log(response.data);
      setNotes(response.data);
    }).catch(error=>{
      console.log(error.message)
    })
  }

  //Delete request for deleting a note
  const deleteNote = ()=>{
    axios.delete('http://localhost:8000/notes/delete/:630a4bf23408002537d8446c').then((response)=>{
      console.log(response.message);
    }).catch(error =>{
        console.log(error.message);
    })
  }

  return (
    <div className='container-fluid'>
      <h1 style={{textAlign:'center'}}>My notes list</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
        {notes.map(note =>(
              <tr key={note._id}>
                <td>{note.title}</td>
                <td>{note.description}</td>
                <td>
                    <span>
                        <button className='btn btn-dark'>Update</button>
                    </span>
                    <span>
                        <button className='btn btn-danger ms-2' onClick={deleteNote}>Delete</button>
                    </span>
                    
                </td>
            </tr>
            ))}
          
        </tbody>
      </table>
    </div>
  )
}

export default NotesList