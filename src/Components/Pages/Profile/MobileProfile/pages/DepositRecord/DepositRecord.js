import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../../../Contexts/AuthContext/AuthProvider';
import SingleItem from './SingleItem';

const DepositRecord = () => {

    const  { LoginWithEmail, authUser } = useContext(AuthContext);

    const [depositHistory, setDepositHistroy] = useState([]);

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
                    setDepositHistroy(data.data);
                });
        }

    }, [])

    return (

        <>
            <div className='deposit-mobile-details shadow-lg p-3 my-2 bg-body rounded '>
                <h1>Deposit Record</h1>

                <div className='scrollbar-y ' >
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">No.</th>
                                <th scope="col">Transection Id</th>
                                <th scope="col">Amount</th>
                                <th scope="col">Date</th>
                                <th scope="col">staus</th>
                            </tr>
                        </thead>
                        <tbody>

                            {


                                depositHistory.map((data, index) => <SingleItem data={data} index={index} key={data._id}>  </SingleItem>)

                            }

                        </tbody>
                    </table>
                </div>




            </div>
        </>
    );
};

export default DepositRecord;