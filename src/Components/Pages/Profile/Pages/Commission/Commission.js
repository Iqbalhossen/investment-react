import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../../Contexts/AuthContext/AuthProvider';

const Commission = () => {
    const  { LoginWithEmail, authUser } = useContext(AuthContext);

    // const [depostis, setDeposits] = useState([]);

    // useEffect(() => {
    //     fetch(`http://localhost:5000/api/user/deposit/view/${authUser._id}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             setDeposits(data);
    //         });

    // }, [])
    return (
        <>

            <div className='profile-details shadow-lg p-5 mb-2 bg-body rounded '>
                <h1>All Commission</h1>
                <div className='scrollbar-x ' style={{height:'200px'}}>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">User Name</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Generation</th>
                            <th scope="col">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                     
                     
                       
                    </tbody>
                </table>

                </div>
               


            </div>


        </>
    );
};

export default Commission;