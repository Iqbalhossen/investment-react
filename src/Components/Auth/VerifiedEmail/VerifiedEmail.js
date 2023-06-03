import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const VerifiedEmail = () => {
    const {id} =  useParams();
    const [message , setMessage] = useState('');
    useEffect(() => {
        fetch(`http://localhost:5000/api/user/verify/${id}`, {
            method: 'GET',
            headers: {
                'authorization':
                    'Beare eyJ1c2VyX25hbWUiOiJpcWJhbDExMSIsInVzZXJfaWQiOiI2M2VhNmE3MmU4N2U5ZWJkNGM2OWI1OTAiLCJpYXQiOjE2NzkzMzQ3OTUsImV4cCI6MTY3OTMzODM5NX0',
            },
        })
            .then(res => res.json())
            .then(data => {
                if(data.success === true){
                    setMessage(data);
                    // console.log(data)

                }else{
                    setMessage(data);
                    // console.log(data)
                }
            });

    }, [])

    console.log(message)

    return (
        <>

        <section className='container text-center py-5'>

            <h1>Your Account {message?.message ? message.message : ''}</h1>
            <p>Please Login Your Account</p>

        </section>
            
        </>
    );
};

export default VerifiedEmail;