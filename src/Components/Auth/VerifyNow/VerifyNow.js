import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthContext/AuthProvider';

const VerifyNow = () => {

    const { LoginWithEmail, authUser } = useContext(AuthContext);
    const [message, setMessage] = useState('');
    const handleEmailSend = () => {
        fetch(`http://localhost:5000/api/user/verify/email/send/${authUser._id}`, {
            method: 'GET',
            headers: {
                'authorization':
                    'Beare eyJ1c2VyX25hbWUiOiJpcWJhbDExMSIsInVzZXJfaWQiOiI2M2VhNmE3MmU4N2U5ZWJkNGM2OWI1OTAiLCJpYXQiOjE2NzkzMzQ3OTUsImV4cCI6MTY3OTMzODM5NX0',
            },
        })
            .then(res => res.json())
            .then(data => {
                if (data.success === true) {
                    setMessage(data);
                    // console.log(data)
                }
            });
    }


    return (
        <>
            <section className='container py-5 text-center'>

                <p>{message.message}</p>

                <div className=''>
                    <h1>Verify Your Email</h1>
                    {/* <p>Reference site about </p> */}
                </div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW21hECvK-JuF5hrLuFyhnbc60MCnhzffIrA&usqp=CAU" className="card-img-top" alt="..." />


                <div className='d-flex justify-content-center'>
                    <button onClick={handleEmailSend} class="btn btn-primary me-2">Resend</button>
                    {/* <button type="button" class="btn btn-secondary">Secondary</button> */}
                </div>
            </section>
        </>
    );
};

export default VerifyNow;