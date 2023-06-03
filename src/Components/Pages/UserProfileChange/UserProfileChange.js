import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthContext/AuthProvider';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
const UserProfileChange = () => {

    const  { LoginWithEmail, authUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const userFrom = location.state?.from?.pathname || "/my/info";
    const verfiyEmail = location.state?.from?.pathname || '/verify/now';;
    // console.log(userImage);

    const [ChangeProfile, setChangeProfile] = useState({});
    const[BtnDisable, setBtnDisable] = useState(false)


    const handleInputBlur = event => {
        const value = event.target.value;
        const field = event.target.name;
        const newUser = { ...ChangeProfile, };
        newUser[field] = value;
        setChangeProfile(newUser);
    }


    const handleForm = event => {
        setBtnDisable(true)
        event.preventDefault();
        // console.log(deposit);
        if (authUser) {
            fetch(`http://localhost:5000/api/user/profile/change/${authUser.userName}/${authUser._id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json',
                    'authorization':
                        'Beare eyJ1c2VyX25hbWUiOiJpcWJhbDExMSIsInVzZXJfaWQiOiI2M2VhNmE3MmU4N2U5ZWJkNGM2OWI1OTAiLCJpYXQiOjE2NzkzMzQ3OTUsImV4cCI6MTY3OTMzODM5NX0',
                },
                body: JSON.stringify(ChangeProfile)
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    if (data.success === false) {
                        setBtnDisable(false);
                    } else {
                        if(data.data === "email"){
                            localStorage.removeItem("ID");
                            setBtnDisable(false)
                            navigate(verfiyEmail, { replace: true });
                            toast('Your profile update successful!', {
                                position: "top-right",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: "light",
                            });
                        }else{
                            setBtnDisable(false)
                            navigate(userFrom, { replace: true });
                            toast('Your profile update successful!', {
                                position: "top-right",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: "light",
                            });
                        }
                  
                        // setLoading(false);
                    }


                })
                .catch(error => <></>);
            event.target.reset();
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
                        <div className='col-12 col-md-8 col-lg-8'>


                            <div className="my-3 deposit-input d-block">
                                <label className="form-label">Full Name</label>
                                <input type="text" onChange={handleInputBlur} width='70%' defaultValue={user.name} name="name" className="form-control deposit-input" placeholder="Enter the full name" />
                            </div>

                            <div className="my-3 deposit-input d-block">
                                <label className="form-label"> Email Address</label>
                                <input type="email" onChange={handleInputBlur} width='70%' defaultValue={user.email} name="email" className="form-control deposit-input"  placeholder="Enter your Email Address" />
                            </div>
                            <div className="my-3 deposit-input d-block">
                                <label className="form-label"> Bio</label>
                                <textarea className="form-control" onChange={handleInputBlur} name="bio" rows="3" defaultValue={user.bio}></textarea>
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

export default UserProfileChange;