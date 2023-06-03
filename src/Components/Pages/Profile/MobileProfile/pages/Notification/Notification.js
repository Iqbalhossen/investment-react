import React, { useEffect, useState } from 'react';
import './Notification.css'
import SingleItem from './SingleItem';
const Notification = () => {

    const [message, setMessage] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/api/user/notification/view`, {
            method: 'GET',
            headers: {
                'authorization':
                    'Beare eyJ1c2VyX25hbWUiOiJpcWJhbDExMSIsInVzZXJfaWQiOiI2M2VhNmE3MmU4N2U5ZWJkNGM2OWI1OTAiLCJpYXQiOjE2NzkzMzQ3OTUsImV4cCI6MTY3OTMzODM5NX0',
            },
        })
            .then(res => res.json())
            .then(data => setMessage(data));

    }, [])
    
    return (
        <>
            <section>
                <div className='p-3'>
                    {


                        message.map((data, index) => <SingleItem data={data} index={index} key={data._id} ></SingleItem>)

                    }
                </div>
            </section>
        </>
    );
};

export default Notification;