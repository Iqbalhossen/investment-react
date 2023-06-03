import React, { useContext, useState } from 'react';
import { Form, Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthContext/AuthProvider';
import './Login.css'
const Login = () => {

    const { LoginWithEmail, setUser, authUser } = useContext(AuthContext);

    const [userData, setUserData] = useState({});

    const navigate = useNavigate();
    const location = useLocation();
    const userFrom = location.state?.from?.pathname || "/account";
    // console.log(authUser)

    const [user, setUserValue] = useState({});
 
    const handleLogin = event => {
        event.preventDefault();
        fetch('http://localhost:5000/api/user/login', {
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
                    // console.log(data)
                } else {
                    const user = data;
                    localStorage.setItem("ID", JSON.stringify(user.data));
                    const expires = new Date(Date.now() + 30*60*1000).toUTCString();
                    document.cookie = `token=OiJpcWJhbDExMSIsInVzZXJfaWQiOiI2M2VhNmE3MmJ1c2VyX25hbWMzODM5NX0VzZXJfaWQiOiI2M2InVzZXJfaWQiOiI2M2VhNmE3MmU4N2U5ZWJkNGM; expires=${expires};`;
                    event.target.reset();

                    if (user.data) {
                        LoginWithEmail(user.data);
                        navigate(userFrom, { replace: true });
                    }


                    // setLoading(false);

                }


            })
            .catch(error => <></>);
        
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

            <section className='container pt-3'>
                <div className='row shadow-lg p-3 bg-body rounded'>
                    <div className='col-lg-6 col-md-6 col-12 p-5 login-left'>

                        <img src="https://brandio.io/envato/iofrm/html/images/graphic4.svg" className="card-img-top" alt="..." />
                        <p>Don't have an account? <Link to="/signup">Register here</Link></p>


                    </div>
                    <div className='col-lg-6 col-md-6 col-12  p-lg-5'>
                        {userData.message}
                        <div className='login-content pb-2'>
                            <h1>Login</h1>
                        </div>

                        <form onSubmit={handleLogin}>
                            <div className='login-input mb-4'>
                                <label><i className="fa-solid fa-user"></i></label>
                                <input type="email" name="email" onBlur={handleInputBlur} placeholder='Email Address' />
                            </div>
                            <div className='login-input mb-4'>
                                <label><i className="fa fa-unlock-alt"></i></label>
                                <input type="password" name="password" onBlur={handleInputBlur} placeholder='password' />
                            </div>

                            <div className="form-check mb-2">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" >
                                    I agree to the terms of service
                                </label>
                                <label className="form-check-label ms-4" >
                                    <Link to='/forgot'>Forgot Password</Link>
                                </label>
                            </div>
                            <button type="submit" className="btn btn-primary">Login</button>

                        </form>
                    </div>

                    <div className='col-lg-6 col-md-6 col-12   p-5 login-image'>
                        <img src="https://brandio.io/envato/iofrm/html/images/graphic4.svg" className="card-img-top" alt="..." />
                        <p>Don't have an account? <Link to="/signup">Register here</Link></p>
                    </div>
                </div>
            </section>

            

        </>
    );
};

export default Login;