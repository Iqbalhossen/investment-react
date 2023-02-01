import React from 'react';

const ChangeProfile = () => {
    return (
        <>
            <div className='profile-details shadow-lg p-5 mb-2 bg-body rounded '>
                <h1>Change Profile</h1>
                <form>
                    <div className='row'>
                        <div className='col-6'>
                            <div className="mb-3">
                            <label className="form-label">Full Name</label>
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                              
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className="mb-3">
                            <label className="form-label">User Name</label>
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" disabled/>
                               
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className="mb-3">
                            <label className="form-label">photo</label>
                                <input type="file" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                              
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className="mb-3">
                            <label className="form-label">Email</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />                          
                            </div>
                        </div>
                    </div>



                    <button type="submit" className="btn btn-primary">Change</button>
                </form>
                <hr />


            </div>
        </>
    );
};

export default ChangeProfile;