import React, { useContext, useState } from 'react';
import { Form, Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthContext/AuthProvider';
import './Signup.css'

const Signup = () => {

    const { LoginWithEmail, authUser } = useContext(AuthContext);

    const [userData, setUserData] = useState({});
    const [confirmPasswordError, setConfimPasswordError] = useState('');
    const [minimumPasswordError, setminimumPasswordError] = useState('');
    const [passerror, setpasserror] = useState('');

    const navigate = useNavigate();
    const location = useLocation();
    if(authUser){

    }
    const from = location.state?.from?.pathname || '/verify/now';

    const [user, setUser] = useState({});

    const handleRegister = event => {
        event.preventDefault();

        let reg = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#/$%/^&/*])(?=.{8,})");
        let strongPassword = reg.test(user.password);
        // console.log(user.password);

        if(user.password === user.cpassword){
          if(user.password.length >= 8){
            if (strongPassword) {
                
                 // console.log(user);
        fetch('http://localhost:5000/api/user/create', {
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
                if (data.success === false) {
                    setUserData(data);
                    console.log(data)
                } else {
                    const user = data;
                    localStorage.setItem("ID", JSON.stringify(user.data));
                    LoginWithEmail(user.data)
                    // console.log(user);
                    navigate(from, { replace: true })

                }
            })
            .catch(error => console.log(error));
        // event.target.reset();

            } else{
                setpasserror('At least 1 uppercase letter 1 lowercase letter  1 number and 1 spcial letter')
            }
          }else{
            setminimumPasswordError('At least 8 character')
          }
        }else{
            setConfimPasswordError('Confirm password does not match!!')
        }

       

       
    }

    const handleInputBlur = event => {
        setUserData('');
        setConfimPasswordError('');
        setminimumPasswordError('');
        setpasserror('')
        let setTime = new Date();
        const value = event.target.value;
        const field = event.target.name;
        const newUser = { ...user, picture: null, bio:null, status: true, is_verified:false,  created_at: setTime };
        // console.log(newUser);
        newUser[field] = value;

        setUser(newUser);
    }




    
    return (
        <>
            <section className='container py-3'>
                <div className='row shadow-lg p-3 mb-5 bg-body rounded'>
                    <div className='col-lg-6 col-md-6 col-12   p-lg-5 p-2 sign-left'>
                        <div className='sign-content py-4'>
                            <h1>Sign Up</h1>
                        </div>
                        <form onSubmit={handleRegister}>
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
                            <input type="text" name="reference" onBlur={handleInputBlur} placeholder='Reference User name' />
                        </div>

                        <div className='sign-input mb-4'>
                            <label><i className="fa-solid fa-user"></i></label>
                            <input type="email" name="email" onBlur={handleInputBlur} placeholder='Email Address' />
                        </div>
                        <div className='sign-input mb-4'>
                            <label><i className="fa fa-unlock-alt"></i></label>
                            <input type="password" name="password" onBlur={handleInputBlur} placeholder='Password' />
                        </div>
                        <span className='text-danger'>{minimumPasswordError}</span>
                        <span className='text-danger'>{passerror}</span>
                        <div className='sign-input mb-4'>
                            <label><i className="fa fa-unlock-alt"></i></label>
                            <input type="password" name="cpassword" onBlur={handleInputBlur} placeholder='Confirm password' />
                        </div>
                        <span className='text-danger'>{confirmPasswordError}</span>

                        <div className="form-check mb-2">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" >
                            I agree to the terms of service
                            </label>
                        </div>
                        <button type="submit" className="btn btn-primary">Signup</button>
                        </form>
                    </div>
                    <div className='col-lg-6 col-md-6 col-12   p-5'>
                        <img src=" https://brandio.io/envato/iofrm/html/images/graphic4.svg" className="card-img-top" alt="..." />
                        <p>Already a member? <Link to="/login">Login here</Link></p>
                    </div>

                </div>
            </section>
        </>
    );
};

export default Signup;