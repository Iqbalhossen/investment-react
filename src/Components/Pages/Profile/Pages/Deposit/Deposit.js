import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../../Contexts/AuthContext/AuthProvider';
import SingleDeposit from './SingleItem';

const Deposit = () => {

    const  { LoginWithEmail, authUser } = useContext(AuthContext);

    const [deposit, setDeposits] = useState([]);
    const totaldata = deposit.data;

        useEffect(() => {
            if (authUser) {
                fetch(`http://localhost:5000/api/user/deposit/view/${authUser.userName}`, {
                    method: 'GET',
                    headers: {
                        'authorization':
                            'Beare eyJ1c2VyX25hbWUiOiJpcWJhbDExMSIsInVzZXJfaWQiOiI2M2VhNmE3MmU4N2U5ZWJkNGM2OWI1OTAiLCJpYXQiOjE2NzkzMzQ3OTUsImV4cCI6MTY3OTMzODM5NX0',
                    },
                })
                    .then(res => res.json())
                    .then(data => {
                        setDeposits(data.data);
                    });
            }
            

        }, [])

    // console.log(deposit)

    return (
        <>
            <div className='profile-details shadow-lg p-5 mb-2 bg-body rounded '>
                <h1>Deposit Record</h1>

                <div className='scrollbar-x ' style={{ height: '200px' }}>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">No.</th>
                                <th scope="col">Transection Id</th>
                                <th scope="col">Amount</th>
                                <th scope="col">Date</th>
                                <th scope="col">status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {


                                deposit.map((data, index) => <SingleDeposit data={data} index={index} key={data._id} ></SingleDeposit>)

                            }

                        </tbody>
                    </table>

                </div>



            </div>

        </>
    );
};

export default Deposit;