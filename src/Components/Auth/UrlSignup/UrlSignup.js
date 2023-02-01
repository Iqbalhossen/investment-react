import React, { useContext, useState } from 'react';
import { Form, Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthContext/AuthProvider';

const UrlSignup = () => {

     let { InviteUserName } = useParams();

    const { LoginWithEmail, authUser, setLoading } = useContext(AuthContext);

    const [userData, setUserData] = useState({});

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/account";
    const [user, setUser] = useState({});

    const handleRegister = event => {
        event.preventDefault();
        // console.log(user);
        fetch('https://crypto-iqbalhossen.vercel.app/api/user/create', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success === false) {
                    setUserData(data);
                } else {
                    const user = data;
                    localStorage.setItem("ID", JSON.stringify(user.data));
                    LoginWithEmail(user.data)
                    // console.log(user);
                    navigate(from, { replace: true })

                }
            })
            .catch(error => console.log(error));
        event.target.reset();
    }

    const handleInputBlur = event => {
        setUserData('');
        let setTime = new Date();
        const value = event.target.value;
        const field = event.target.name;
        const newUser = { ...user, picture: null, status: 0, reference:InviteUserName, created_at: setTime };
        // console.log(newUser);
        newUser[field] = value;

        setUser(newUser);
    }


    return (
        <>
            <section className='container py-5'>
                <div className='row shadow-lg p-3 mb-5 bg-body rounded'>
                    <div className='col-lg-6 col-md-6 col-12   p-lg-5 p-2 sign-left'>
                        <div className='sign-content py-4'>
                            <h1>Signup</h1>
                        </div>
                        <Form onSubmit={handleRegister}>
                        <span>{userData.message}</span>
                        
                        <div className='sign-input mb-4'>
                            <label><i className="fa-solid fa-user"></i></label>
                            <input type="text" name="name" onBlur={handleInputBlur} placeholder='Full Name' />
                        </div>
                        <div className='sign-input mb-4'>
                            <label><i className="fa-solid fa-user"></i></label>
                            <input type="text" name="userName" onBlur={handleInputBlur} placeholder='User name' />
                        </div>
                        <div className='sign-input mb-4'>
                            <label><i className="fa-solid fa-user"></i></label>
                            <input type="text" name="reference" onBlur={handleInputBlur} placeholder={`${InviteUserName}`} disabled/>
                        </div>

                        <div className='sign-input mb-4'>
                            <label><i className="fa-solid fa-user"></i></label>
                            <input type="email" name="email" onBlur={handleInputBlur} placeholder='Email Address' />
                        </div>
                        <div className='sign-input mb-4'>
                            <label><i className="fa fa-unlock-alt"></i></label>
                            <input type="password" name="password" onBlur={handleInputBlur} placeholder='Password' />
                        </div>
                        <div className='sign-input mb-4'>
                            <label><i className="fa fa-unlock-alt"></i></label>
                            <input type="password" name="cpassword" onBlur={handleInputBlur} placeholder='Confirm password' />
                        </div>
                        <div className="form-check mb-2">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" >
                            I agree to the terms of service
                            </label>
                        </div>
                        <button type="submit" className="btn btn-primary">Signup</button>
                        </Form>
                    </div>
                    <div className='col-lg-6 col-md-6 col-12   p-5'>
                        <img src=" https://brandio.io/envato/iofrm/html/images/graphic4.svg" className="card-img-top" alt="..." />
                        <p>Already a member? <Link>Login here</Link></p>
                    </div>

                </div>
            </section>
        </>
    );
};

export default UrlSignup;