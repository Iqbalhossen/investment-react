import React, { useContext, useState } from 'react';
import { Form, Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ResetPassword = () => {

    const { id } = useParams();
    const [userData, setUserData] = useState({});

    const navigate = useNavigate();
    const location = useLocation();
    const userFrom = location.state?.from?.pathname || "/";
    // console.log(authUser)

    const [user, setUserValue] = useState({});

    const handleLogin = event => {
        event.preventDefault();
        // console.log(user);
        fetch(`http://localhost:5000/api/user/reset/password/${id}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization':
                'Beare eyJ1c2VyX25hbWUiOiJpcWJhbDExMSIsInVzZXJfaWQiOiI2M2VhNmE3MmU4N2U5ZWJkNGM2OWI1OTAiLCJpYXQiOjE2NzkzMzQ3OTUsImV4cCI6MTY3OTMzODM5NX0',
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.success === false) {
                    setUserData(data);
                    // console.log(data);
                    toast.error('Confirm password does not match!', {
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
                    toast.success('Password Reset Successfull!', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });
                    navigate(userFrom, { replace: true });

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


                    </div>
                    <div className='col-lg-6 col-md-6 col-12  p-lg-5'>
                        {userData.message}
                        <div className='login-content pb-2'>
                            <h1>Reset Password</h1>
                        </div>

                        <form onSubmit={handleLogin}>
                            <div className='login-input mb-4'>
                                <label><i className="fa fa-unlock-alt"></i></label>
                                <input type="password" name="password" onBlur={handleInputBlur} placeholder='New Password' />
                            </div>
                            <div className='login-input mb-4'>
                                <label><i className="fa fa-unlock-alt"></i></label>
                                <input type="password" name="cpassword" onBlur={handleInputBlur} placeholder='Confirm Password' />
                            </div>


                            <button type="submit" className="btn btn-primary">Reset Password</button>

                        </form>
                    </div>

                    <div className='col-lg-6 col-md-6 col-12   p-5 login-image'>
                        <img src="https://brandio.io/envato/iofrm/html/images/graphic4.svg" className="card-img-top" alt="..." />
                    </div>
                </div>
            </section>

        </>
    );
};

export default ResetPassword;