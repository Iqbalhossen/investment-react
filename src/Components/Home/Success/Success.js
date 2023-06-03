import React, { useEffect, useState } from 'react';
import './Success.css';
const Success = () => {

    const [total, setTotal] = useState(0);

    useEffect(() => {
        fetch(`http://localhost:5000/api/user/all/package/bouns/all/transaction`, {
            method: 'GET',
            headers: {
                'authorization':
                    'Beare eyJ1c2VyX25hbWUiOiJpcWJhbDExMSIsInVzZXJfaWQiOiI2M2VhNmE3MmU4N2U5ZWJkNGM2OWI1OTAiLCJpYXQiOjE2NzkzMzQ3OTUsImV4cCI6MTY3OTMzODM5NX0',
            },
        })
                .then(res => res.json())
                .then(data => {
                    setTotal(data.data);
                });
    }, [])




    const [user, setUser] = useState(0);
    const [fakeuser, setfakeUser] = useState(0);

    useEffect(() => {
        fetch(`http://localhost:5000/api/admin/user/all/view`, {
            method: 'GET',
            headers: {
                'authorization': 'Beare eyJ1c2VyX25hbWUiOiJpcWJhbDExMSIsInVzZXJfaWQiOiI2M2VhNmE3MmU4N2U5ZWJkNGM2OWI1OTAiLCJpYXQiOjE2NzkzMzQ3OTUsImV4cCI6MTY3OTMzODM5NX0',
            },
        })
            .then(res => res.json())
            .then(data => {
                setUser(data.data.data)
                setfakeUser(data.user)
            });

    }, [])

    return ( 
        <>
            <section className=" my-5 py-5 success">
                <div className='success-header text-center'>
                    <h1>Our Success</h1>
                    <div className="diamond-line-centered-theme-colored "></div>
                    <p>We strive for financial success by focusing on customer satisfaction, employee happiness, market dominance, and continuous innovation. Today, let's secure your future and make it happen together!</p>
                </div>
                <div className='container pt-5'>
                <div className='row'>
                    <div className='col-12 col-sm-6 col-lg-6'>
                        <div className='d-flex success-item'>
                            <div className='success-icon'>
                            <i className="fa-solid fa-bag-shopping"></i>
                            </div>
                            <div className='success-value'>
                                <h2>{4685 + parseInt(user.length)*6 + fakeuser}</h2>
                               
                                <p>WALLET USERS</p>
                            </div>

                        </div>
                    </div>
                    <div className='col-12 col-sm-6 col-lg-6'>
                        <div className='d-flex success-item'>
                            <div className='success-icon  '>
                            <i className="fa-solid fa-dollar-sign"></i>
                            </div>
                            <div className='success-value ms-3'>
                                <h2>{(5089 + total).toFixed(0)}</h2>
                               
                                <p>TOTAL TRANSACTIONS</p>
                            </div>

                        </div>
                    </div>
                    <div className='col-12 col-sm-6 col-lg-6'>
                        <div className='d-flex success-item'>
                            <div className='success-icon '>
                            <i className="fa-solid fa-user"></i>
                            </div>
                            <div className='success-value'>
                                <h2>4454</h2>
                               
                                <p>ONLINE CONSULTANTS</p>
                            </div>

                        </div>
                    </div>
                    <div className='col-12 col-sm-6 col-lg-6'>
                        <div className='d-flex success-item'>
                            <div className='success-icon '>
                            <i className="fa fa-suitcase"></i>
                            </div>
                            <div className='success-value'>
                                <h2>6847</h2>
                               
                                {/* <p>DAILY TRANSACTIONS</p> */}
                                <p>WEB VISITOR</p>
                            </div>

                        </div>
                    </div>
               
                </div>
                </div>
            </section>
        </>
    );
};

export default Success;