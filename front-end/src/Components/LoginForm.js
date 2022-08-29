import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginUser = (e)=>{
        e.preventDefault();
        const user = {
                        email: email,
                        password: password
                    }
        if(email && password){
            axios.post('http://localhost:8000/users/login', user).then(response=>{
            console.log(response)
            setEmail('');
            setPassword('');
        }).catch(error => {
            console.log(error.message)
        })
        }
    }

  return (
    <div className='container-fluid mt-5 '>
        <div className="row justify-content-center mt-4 p-3">
            <div className="col-sm-6 col-lg-4 border border-dark p-3 pt-4 border-opacity-25 rounded-2 shadow">
            <div className="mb-3 row">
                <div className="mt-3">
                <input type="text" 
                    className="form-control" 
                    placeholder='Email' 
                    onChange={e=>setEmail(e.target.value)} 
                    value={email}/>
                </div>
            </div>
            <div className="mb-3 row">
                <div className="mt-3">
                <input type="password" 
                    className="form-control" 
                    placeholder='Password' 
                    onChange={e=>setPassword(e.target.value)}
                    value={password}/>
                </div>
            </div>
            <div className='mb-3 mt-4 d-grid d-block'>
                <button className="btn btn-dark" onClick={loginUser}>Login</button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default LoginForm