import React from 'react'

const NotesList = () => {
  return (
    <div className='container'>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mark</td>
            <td>Otto</td>
            <td>
                <span>
                    <button className='btn btn-dark'>Update</button>
                </span>
                <span>
                    <button className='btn btn-danger ms-2'>Delete</button>
                </span>
                
            </td>
          </tr>
          <tr>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>
                <span>
                    <button className='btn btn-dark'>Update</button>
                </span>
                <span>
                    <button className='btn btn-danger ms-2'>Delete</button>
                </span>
                
            </td>
          </tr>
          <tr>
            <td>Larry the Bird</td>
            <td>Jack</td>
            <td>
                <span>
                    <button className='btn btn-dark'>Update</button>
                </span>
                <span>
                    <button className='btn btn-danger ms-2'>Delete</button>
                </span>
                
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default NotesList