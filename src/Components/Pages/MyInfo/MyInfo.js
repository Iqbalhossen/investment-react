import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthContext/AuthProvider';

const MyInfo = () => {

    const  { LoginWithEmail, authUser } = useContext(AuthContext);

  
  
    const [usershow, setUser] = useState({})
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
                    // console.log(data)
                });
        }

    }, [])

    const [myBalance, setMyBalance] = useState(0)

    
    useEffect(() => {
        if (authUser) {
            fetch(`http://localhost:5000/api/user/personal/balance/view/${authUser.userName}`, {
                method: 'GET',
                headers: {
                    'authorization':
                        'Beare eyJ1c2VyX25hbWUiOiJpcWJhbDExMSIsInVzZXJfaWQiOiI2M2VhNmE3MmU4N2U5ZWJkNGM2OWI1OTAiLCJpYXQiOjE2NzkzMzQ3OTUsImV4cCI6MTY3OTMzODM5NX0',
                },
            })
                .then(res => res.json())
                .then(data => {
                    setMyBalance(data.data);
                    // console.log(data)
                });
        }


    }, [])

    return (
        <>

            <section className='container pb-5'>
                <div className='d-flex mobile-header justify-content-between align-items-center py-4'>
                    <div className='menu-balance'>
                        <h3>
                            My Balance
                        </h3>
                        <p>$ {myBalance.toFixed(8)}</p>
                    </div>
                    <div className='menu-user-profile text-center'>
                        <div className=''>
                        {usershow?.picture === null ? <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgsaRe2zqH_BBicvUorUseeTaE4kxPL2FmOQ&usqp=CAU" className="card-img-top" alt="..." /> : <img src={`http://localhost:5000/${usershow?.picture}`} className="card-img-top" alt="..." />}
                            <h2>{usershow?.name}</h2>
                        </div>
                    </div>

                </div>

                <div className='pb-4'>
                    <h4>Name: {usershow?.name}</h4>
                    <h5>User Name: {usershow?.userName}</h5>
                    <h5>Email: {usershow?.email}</h5>
                    <h5>Account:  Verified</h5>
                    <h5>Reference: {usershow?.reference}</h5>
                    <h5>Bio: {usershow?.bio}</h5>
                </div>

                <div className='services-menu container  mt-2 d-flex justify-content-between'>
                    <Link to='/profile/change' class="btn btn-light btn-color fw-bolder fs-6">Change Profile</Link>
                    <Link to='/profile/photo'  class="btn btn-light btn-color fw-bolder fs-6">Change Photo</Link>
                </div>
                <div className='services-menu container  mt-2 d-flex justify-content-between'>
                    <Link to="/password/change"  class="btn btn-light btn-color fw-bolder fs-6">Change Password</Link>
                </div>
                {/* <div className='services-menu container  mt-5 d-flex justify-content-between'>
                <button  class="btn btn-light btn-color fw-bolder">Overview</button>

                <button  class="btn btn-light btn-color fw-bolder">Deposit Now</button>

            </div> */}

            </section>

        </>
    );
};

export default MyInfo;