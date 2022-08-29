import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginForm = ({findUserType}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [login, setLogin] = useState(false);

    const navigate = useNavigate(); 
    const userType = (type) =>{
        findUserType(type);
    }

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
            setLogin(true);
            navigate("/dashboard");
            userType(response.data.accountType);
        }).catch(error => {
            console.log(error.message)
            setEmail('');
            setPassword('');
            alert('Invalid credentials');
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