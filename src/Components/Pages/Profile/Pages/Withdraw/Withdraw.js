import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../../Contexts/AuthContext/AuthProvider';
import SingleItem from './SingleItem';

const Withdraw = () => {

    const  { LoginWithEmail, authUser } = useContext(AuthContext);

    const [withdrawAmount, setwithdrawAmount] = useState([])
    // console.log(usergenerateSum);
    useEffect(() => {
        if (authUser) {
            fetch(`http://localhost:5000/api/user/withdraw/accept/view/${authUser.userName}/${authUser._id}`, {
                method: 'GET',
                headers: {
                    'authorization':
                        'Beare eyJ1c2VyX25hbWUiOiJpcWJhbDExMSIsInVzZXJfaWQiOiI2M2VhNmE3MmU4N2U5ZWJkNGM2OWI1OTAiLCJpYXQiOjE2NzkzMzQ3OTUsImV4cCI6MTY3OTMzODM5NX0',
                },
            })
                .then(res => res.json())
                .then(data => {
                    setwithdrawAmount(data.data.data);
                    // console.log(data.data.data);
                });
        }


    }, [])


    return (
        <>


            <section className='container mt-3'>


                {/* Overview history start  */}
                <div className='shadow-lg p-3 mb-5 bg-body rounded'>

                    <div className='deposit-title align-items-center  d-flex'>
                        <i className="fa-solid fa-arrow-left"></i>
                        <h1>History</h1>

                    </div>


                    <div className='scrollbar-x '>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">No.</th>
                                    <th scope="col">Networks</th>
                                    <th scope="col">Wallet Address</th>
                                    <th scope="col">Amount</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Date</th>
                                </tr>
                            </thead>
                            <tbody>

                                {


                                    withdrawAmount.map((data, index) => <SingleItem data={data} index={index} key={data._id}>  </SingleItem>)

                                }

                            </tbody>
                        </table>

                    </div>



                </div>
                {/* Overview history end  */}



            </section>


            {/* <div className='profile-details shadow-lg p-5 mb-2 bg-body rounded '>
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


                                withdrawAmount.map((data, index) => <SingleDeposit data={data} index={index} key={data._id} ></SingleDeposit>)

                            }

                        </tbody>
                    </table>

                </div>



            </div> */}
        </>
    );
};

export default Withdraw;