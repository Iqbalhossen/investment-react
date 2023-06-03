import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import dateFormat from 'dateformat';
const NotificationView = () => {
    const { id } = useParams()
    const [message, setMessage] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/api/user/notification/view/${id}`, {
            method: 'GET',
            headers: {
                'authorization':
                    'Beare eyJ1c2VyX25hbWUiOiJpcWJhbDExMSIsInVzZXJfaWQiOiI2M2VhNmE3MmU4N2U5ZWJkNGM2OWI1OTAiLCJpYXQiOjE2NzkzMzQ3OTUsImV4cCI6MTY3OTMzODM5NX0',
            },
        })
            .then(res => res.json())
            .then(data => setMessage(data));

    }, [])

    const time = dateFormat(`${message[0] ? message[0]?.created_at : ''}`, "mmmm dS, yyyy");

    // console.log(time)
    return (
        <>
            <section>
                <div className='p-3'>
                    <div className='shadow-lg p-2 bg-body user-message rounded notification-btn px-4 py-3'>
                        <h1>{message[0]?.Title}</h1>
                        <span>{message[0]?.author_name}</span>
                        <small>{time}</small>
                        <p>{message[0]?.messages}</p>

                    </div>
                </div>
            </section>
        </>
    );
};

export default NotificationView;