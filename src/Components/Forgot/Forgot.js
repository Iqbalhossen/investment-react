import React, { useContext, useState } from 'react';
import { Form, Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Forgot = () => {

    const [message, setMessage] = useState('')
    const [userData, setUserData] = useState({});

    const location = useLocation();


    const [user, setUserValue] = useState({});

    const handleLogin = event => {
        event.preventDefault();
       
        fetch('http://localhost:5000/api/user/forgot/password', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization':
                'Beare eyJ1c2VyX25hbWUiOiJpcWJhbDExMSIsInVzZXJfaWQiOiI2M2VhNmE3MmU4N2U5ZWJkNGM2OWI1OTAiLCJpYXQiOjE2NzkzMzQ3OTUsImV4cCI6MTY3OTMzODM5NX0'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.success === false) {
                    setMessage(data);
                    // console.log(data);
                    toast.error('Email Not Register!', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                        });
                } else {
                    setMessage(data);
                    toast.success('Check Your Email Forgot Password Link Send!', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });
                    // console.log(data)

                }


            })
            .catch(error => <></>);
        event.target.reset();
    }

    const handleInputBlur = event => {
        const value = event.target.value;
        const field = event.target.name;
        const newUser = { ...user };
        newUser[field] = value;
        setUserValue(newUser);
    }

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />

            <section className='container pt-3'>
                <div className='row shadow-lg p-3 bg-body rounded'>
                    <div className='col-lg-6 col-md-6 col-12 p-5 login-left'>

                        <img src="https://brandio.io/envato/iofrm/html/images/graphic4.svg" className="card-img-top" alt="..." />
                        <p>Already a member? <Link to="/login">Login here</Link></p>



                    </div>
                    <div className='col-lg-6 col-md-6 col-12  p-lg-5'>
                        {userData.message}
                        <div className='login-content pb-2 pt-3'>
                            <h1>Forgot Password</h1>
                        </div>

                        <form onSubmit={handleLogin}>
                            <div className='login-input mb-4'>
                                <label><i className="fa-solid fa-user"></i></label>
                                <input type="email" name="email" onBlur={handleInputBlur} placeholder='Email Address' />
                            </div>
                            <button type="submit" className="btn btn-primary">Forgot</button>

                        </form>
                    </div>

                    <div className='col-lg-6 col-md-6 col-12   p-5 login-image'>
                        <img src="https://brandio.io/envato/iofrm/html/images/graphic4.svg" className="card-img-top" alt="..." />
                        <p>Already a member? <Link to="/login">Login here</Link></p>
                    </div>
                </div>
            </section>
        </>


    );
};

export default Forgot;