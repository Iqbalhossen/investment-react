import axios from 'axios';
import React, { useContext, useState } from 'react';
import { Form, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../../../../Contexts/AuthContext/AuthProvider';
const ChangeImage = () => {

    const  { LoginWithEmail, authUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const userFrom = location.state?.from?.pathname || "/my/info";
    const [userImage, setUserImage] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    // console.log(userImage);

    const [ChangeProfilebtn, setChangeProfileBtn] = useState(false);

    const handleImage = (e) => {
        setMessage("")
        setUserImage(e.target.files[0])
    }
 


    const handleProfileChange = event => {
        event.preventDefault();
        const userData = { picture: userImage };
        

        if (userData.picture === '') {
            setMessage("please choose your photo");
        } else {
            setChangeProfileBtn(true);
            const config = {
                headers: {
                    'content-type': 'multipart/form-data',
                    'authorization':
                    'Beare eyJ1c2VyX25hbWUiOiJpcWJhbDExMSIsInVzZXJfaWQiOiI2M2VhNmE3MmU4N2U5ZWJkNGM2OWI1OTAiLCJpYXQiOjE2NzkzMzQ3OTUsImV4cCI6MTY3OTMzODM5NX0',
                }
            };
           

            axios.put(`http://localhost:5000/api/user/photo/change/${authUser?.userName}/${authUser?._id}`, userData, config)
            .then((data) => {
                // console.log(data.data);
                navigate(userFrom, { replace: true });
                setChangeProfileBtn(false);
            }).catch((error) => {
                setError(error);
            });

        }

    }




    // console.log(error?.response?.data.substring(116, 131))

    return (
        <>

            <section className='container mt-5 pb-5'>
                <form onSubmit={handleProfileChange} >

                    <div className='row px-3'>
                        <div className='col-12 col-md-8 col-lg-8'>

                            <div className="my-3 deposit-input d-block">
                                <label className="form-label"> Picture</label>
                                <input type="file" onChange={handleImage} width='70%' name="picture" className="form-control deposit-input" />
                            </div>
                            <p className='text-danger'>{message}</p>

                            <div className="d-grid gap-2">
                                {ChangeProfilebtn === true ? <button className="btn btn-primary deposit-btn-submit" disabled>Confirm</button>
                                 :
                                 <button className="btn btn-primary deposit-btn-submit" type="submit">Confirm</button>
                                  }
                                
                            </div>

                        </div>
                    </div>
                </form>

            </section>

        </>
    );
};
export default ChangeImage;