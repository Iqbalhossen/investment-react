import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
import { AuthContext } from '../../../../../Contexts/AuthContext/AuthProvider';
const ChangePassword = () => {

    const {LoginWithEmail, authUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const userFrom = location.state?.from?.pathname || "/login";
    const [ChangeProfile, setChangeProfile] = useState({});
    const [BtnDisable, setBtnDisable] = useState(false)

    const [message, setMessage] = useState('')

    const handleInputBlur = event => {
        setMessage('')
        const value = event.target.value;
        const field = event.target.name;
        const newUser = { ...ChangeProfile, };
        newUser[field] = value;
        setChangeProfile(newUser);
    }


    const handleForm = event => {
        setMessage('')
        setBtnDisable(true)
        event.preventDefault();
        if (authUser) {
            fetch(`http://localhost:5000/api/user/password/change/${authUser.userName}/${authUser._id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json',
                    'authorization':
                    'Beare eyJ1c2VyX25hbWUiOiJpcWJhbDExMSIsInVzZXJfaWQiOiI2M2VhNmE3MmU4N2U5ZWJkNGM2OWI1OTAiLCJpYXQiOjE2NzkzMzQ3OTUsImV4cCI6MTY3OTMzODM5NX0'
                },
                body: JSON.stringify(ChangeProfile)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.success === false) {
                        setBtnDisable(false);
                        setMessage(data.message);
                    } else {
                        navigate(userFrom, { replace: true });
                        toast('Your password update successful!', {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                        });
                        event.target.reset();

                    }


                })
                .catch(error => <></>);
        }

    }



    const [user, setUser] = useState([]);

    useEffect(() => {
        if (authUser) {
            fetch(`http://localhost:5000/api/user/view/${authUser.userName}/${authUser._id}`, {
                method: 'GET',
                headers: {
                    'authorization':
                        'Beare eyJ1c2VyX25hbWUiOiJpcWJhbDExMSIsInVzZXJfaWQiOiI2M2VhNmE3MmU4N2U5ZWJkNGM2OWI1OTAiLCJpYXQiOjE2NzkzMzQ3OTUsImV4cCI6MTY3OTMzODM5NX0',
                },
            })
                .then(res => res.json())
                .then(data => {
                    setUser(data.data);
                });
        }
 
    }, [])
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
                theme="light"
            />

            <ToastContainer />
            <section className='container mt-5 pb-5'>
                <form onSubmit={handleForm} >
                    <div className='row px-3'>
                        {message === '' ? '' : <span class="badge bg-danger w-75 m-auto px-3 py-2 scrollbar-x ">{message}</span>}

                        <div className='col-12 col-md-8 col-lg-8'>


                            <div className="my-3 deposit-input d-block">
                                <label className="form-label">New Password</label>
                                <input type="password" onChange={handleInputBlur} width='70%' name="password" className="form-control deposit-input" placeholder="*******" />
                            </div>

                            <div className="my-3 deposit-input d-block">
                                <label className="form-label">confirm Password</label>
                                <input type="password" onChange={handleInputBlur} width='70%' name="confirmPassword" className="form-control deposit-input" placeholder="*******" />
                            </div>
                            <div className="my-3 deposit-input d-block">
                                <label className="form-label">Old Password</label>
                                <input type="password" onChange={handleInputBlur} width='70%' name="oldPassword" className="form-control deposit-input" placeholder="*******" />
                            </div>


                            <div className="d-grid gap-2">
                                {BtnDisable === true ?
                                    <button className="btn btn-primary deposit-btn-submit" disabled>update</button>
                                    :
                                    <button className="btn btn-primary deposit-btn-submit" type="submit">update</button>
                                }
                            </div>

                        </div>
                    </div>
                </form>

            </section>

        </>
    );
};

export default ChangePassword;