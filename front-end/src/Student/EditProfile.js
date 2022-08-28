import React from 'react'

const EditProfile = () => {
  return (
    <div className='container-fluid mt-5 '>
        <div className="row justify-content-center mt-4 p-3">
            <div className="col-sm-6 col-lg-4 border border-dark p-3 pt-4 border-opacity-25 rounded-2 shadow">
            <div className="mb-2 row">
                <div className="mt-3">
                <input type="text" className="form-control" placeholder='First name' />
                </div>
            </div>
            <div className="mb-2 row">
                <div className="mt-3">
                <input type="text" className="form-control" placeholder='Last name' />
                </div>
            </div>
            <div className="mb-2 row">
                <div className="mt-3">
                <input type="text" className="form-control" placeholder='Date of birth' />
                </div>
            </div>
            <div className="mb-2 row">
                <div className="mt-3">
                <input type="text" className="form-control" placeholder='Mobile number' />
                </div>
            </div>
            <div className="mb-2 row">
                <div className="mt-3">
                <input type="text" className="form-control" placeholder='Password' />
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

export default EditProfile