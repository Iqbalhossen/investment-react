import axios from 'axios';
import React, { useContext, useState } from 'react';
import { Form } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../../../../Contexts/AuthContext/AuthProvider';

const ChangeProfile = () => {
    const  { LoginWithEmail, authUser } = useContext(AuthContext);

    const [userImage, setUserImage] = useState('')
    const [name, setName] = useState('')
    // console.log(userImage);

    const [ChangeProfile, setChangeProfile] = useState({});

    const handleImage = (e) => {
        setUserImage(e.target.files[0])
    }

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleInputBlur = event => {
        let setTime = new Date();
        const value = event.target.value;
        const field = event.target.name;
        const newUser = { ...ChangeProfile};
        newUser[field] = value;
        setChangeProfile(newUser);
    }



    const handleProfileChange = event => {
        event.preventDefault();

        const userData = {...ChangeProfile , picture: `${userImage ? userImage : null}` };
        console.log(userData);


        const formData = new FormData();
        formData.append('avatar', userImage);
        formData.append('name', name);

        const config = {
            headers: {
                'content-type': 'multipart/form-data',
                'authorization':
                'Beare eyJ1c2VyX25hbWUiOiJpcWJhbDExMSIsInVzZXJfaWQiOiI2M2VhNmE3MmU4N2U5ZWJkNGM2OWI1OTAiLCJpYXQiOjE2NzkzMzQ3OTUsImV4cCI6MTY3OTMzODM5NX0',
            }
        };
        // console.log(userData)
        if(authUser){
            axios.post(`http://localhost:5000/api/user/profle/Change/${authUser.userName}/${authUser._id}`, userData, config)
            .then((data) => {
                // localStorage.removeItem("ID");
                // localStorage.setItem("ID", JSON.stringify(data.data));
                // console.log(data.data);
                toast('your profile change succesfull!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }).catch((error) => {
                console.log(error);
            });
        }

      

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
                theme="light"
            />
            <div className='profile-details shadow-lg p-5 mb-2 bg-body rounded '>
                <h1>Change Profile</h1>
                <form onSubmit={handleProfileChange}>
                    <div className='row'>
                        <div className='col-6'>
                            <div className="mb-3">
                            <label className="form-label">Full Name</label>
                            <input type="text" onChange={handleInputBlur}  width='70%' name="name" className="form-control deposit-input" placeholder="Enter the full name" />

                            </div>
                        </div>
                        <div className='col-6'>
                            <div className="mb-3">
                            <label className="form-label">User Name</label>
                            <input type="text" disabled width='70%'  value={authUser?.userName} className="form-control deposit-input"  />

                            </div>
                        </div>
                 
                        <div className='col-6'>
                            <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="email" onChange={handleInputBlur} width='70%'  name="email" className="form-control deposit-input" placeholder="Enter your Email Address" />
            
                            </div>
                        </div>
                    </div>

                    <div className='col-6'>
                            <div className="mb-3">
                            <label className="form-label">photo</label>
                            <input type="file" onChange={handleImage} width='70%' name="picture" className="form-control deposit-input"  />

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