import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../../Contexts/AuthContext/AuthProvider';
import SingleItem from './SingleItem';

const GenerationBonus = () => {

    const { LoginWithEmail,  authUser } = useContext(AuthContext);


    const [Totalgeneration, setTotaltgeneration] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/api/user/coin/mining/generation/bonus/${authUser.userName}`, {
            method: 'GET',
            headers: {
                'authorization':
                    'Beare eyJ1c2VyX25hbWUiOiJpcWJhbDExMSIsInVzZXJfaWQiOiI2M2VhNmE3MmU4N2U5ZWJkNGM2OWI1OTAiLCJpYXQiOjE2NzkzMzQ3OTUsImV4cCI6MTY3OTMzODM5NX0',
            },
        })
            .then(res => res.json())
            .then(data => {
                setTotaltgeneration(data.data.data);
                // console.log(data.data);
            });

    }, [])

    let userTotalgeneration = 0
    for (let i = 0; i <= Totalgeneration?.length; i++) {
        if (Totalgeneration[i]) {
            userTotalgeneration += parseFloat(Totalgeneration[i]?.commision);
        }

    }

    return (
        <>
            <div className='container py-4'>
                <div className='scrollbar-x shadow-lg p-3 mb-5 bg-body rounded'>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">No.</th>
                                <th scope="col">User Name</th>
                                <th scope="col">Generation</th>
                                <th scope="col">Bouns</th>
                                <th scope="col">Date</th>
                            </tr>
                        </thead>
                        <tbody>

                            {


                                Totalgeneration.map((data, index) => <SingleItem data={data} index={index} key={data._id}>  </SingleItem>)

                            }


                        </tbody>
                    </table>

                </div>

            </div>
        </>
    );
};

export default GenerationBonus;