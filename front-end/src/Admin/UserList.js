import axios from 'axios';
import React, { useEffect, useState } from 'react'

const UserList = () => {
  //State for keeping the users array
  const [users, setUsers] = useState([]);

  //Using useEffect for fetching data when rendering
  useEffect(()=>{
    getAllUsers()
  },[])

  //Fetch all the users
  const getAllUsers = ()=>{
    axios.get('http://localhost:8000/users').then(response=>{
      console.log(response.data);
      setUsers(response.data);
    }).catch(error=>{
      console.log(error.message);
    })
  }

  return (
    <div className='container-fluid'>
      <h1 style={{textAlign:'center'}}>All users</h1>
      <table className="table">
        <thead>
            <tr>
              <th scope="col">First name</th>
              <th scope="col">Last name</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
          { users.map(user =>(
            <tr key={user._id}>
              <td scope="col">{user.firstName}</td>
              <td scope="col">{user.lastName}</td>
              <td scope="col">{user.email}</td>
              <td scope="col"><button className='btn btn-dark'>View user</button></td>
            </tr>
           ))}
          </tbody>
      </table>
    </div>
  )
}

export default UserList