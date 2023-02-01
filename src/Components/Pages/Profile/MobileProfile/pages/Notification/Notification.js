import React from 'react';
import './Notification.css'
const Notification = () => {
    return (
        <>
            <section>
                <div className='p-3'>
                    <div className='shadow-lg p-2 bg-body user-message rounded'>
                        <h1>Message Title</h1>
                        <span>Atur</span>
                        <small>18 may 2023</small>
                        <p>A responsive table will display a horizontal scroll bar if the .... </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Notification;