import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../../../Contexts/AuthContext/AuthProvider';
import SingleItem from './SingleItem';

const WithdrawRecord = () => {
    const { LoginWithEmail, authUser, setLoading } = useContext(AuthContext);

    const [withdrawAmount, setwithdrawAmount] = useState([])
    // console.log(usergenerateSum);
    useEffect(() => {
        fetch(`https://crypto-iqbalhossen.vercel.app/api/user/withdraw/view/${authUser.userName}/${authUser._id}`)
            .then(res => res.json())
            .then(data => {
                setwithdrawAmount(data.data.data);
                console.log(data.data.data);
            });

    }, [])


    return (
        <>
            <div className='profile-details shadow-lg p-5 mb-2 bg-body rounded '>
                <h1>Withdraw Record</h1>
                <div className='scrollbar-x ' style={{ height: '200px' }}>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">No.</th>
                                <th scope="col">Amount</th>
                                <th scope="col">Wallet Address</th>
                                <th scope="col">Date</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>

                            {


withdrawAmount.map((data, index) => <SingleItem data={data} index={index} key={data._id} ></SingleItem>)

                            }

                        </tbody>
                    </table>

                </div>



            </div>
        </>
    );
};
export default WithdrawRecord;