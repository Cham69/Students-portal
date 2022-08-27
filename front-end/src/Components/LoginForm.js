import React from 'react'

const LoginForm = () => {
  return (
    <div className='container-fluid mt-5 '>
        <div className="row justify-content-center mt-4 p-3">
            <div className="col-sm-6 col-lg-4 border border-dark p-3 pt-4 border-opacity-25 rounded-2 shadow">
            <div className="mb-3 row">
                <div className="mt-3">
                <input type="text" className="form-control" placeholder='Email' />
                </div>
            </div>
            <div className="mb-3 row">
                <div className="mt-3">
                <input type="password" className="form-control" placeholder='Password' />
                </div>
            </div>
            <div className='mb-3 mt-4 d-grid d-block'>
                <button className="btn btn-dark">Login</button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default LoginForm