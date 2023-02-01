import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../../Contexts/AuthContext/AuthProvider';
import SingleItem from './SingleItem';

const RoiMintBonus = () => {
    const { LoginWithEmail, authUser, setLoading } = useContext(AuthContext);
    const [Totalroi, setTotalroi] = useState([]);

    useEffect(() => {
        fetch(`https://crypto-iqbalhossen.vercel.app/api/user/bonus/roi/mint/bonus/${authUser.userName}`)
            .then(res => res.json())
            .then(data => {
                setTotalroi(data.data.data);
                // console.log(data.data.data);
            });

    }, [])

    let userTotalroi = 0
    for (let i = 0; i <= Totalroi.length; i++) {
        if (Totalroi[i]) {
            userTotalroi += parseFloat(Totalroi[i].commision);
        }

    }

    // console.log(userTotalroi)

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


                                Totalroi.map((data, index) => <SingleItem data={data} index={index} key={data._id}>  </SingleItem>)

                            }


                        </tbody>
                    </table>

                </div>

            </div>

        </>
    );
};

export default RoiMintBonus;